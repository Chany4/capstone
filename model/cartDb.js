import { pool } from "../config/config.js"

// add to cart
const addToCartDB = async (mech_id, user_id,quantity) => {
    await pool.query(`
        INSERT INTO cart (mech_id, user_id,quantity)
        VALUES (?, ?, ?)
        `, [mech_id, user_id,quantity])
}

// delete an item from cart 
const deleteFromCart = async(mech_id, user_id,quantity) =>{
    await pool.query(`
        DELETE FROM cart (mech_id, user_id,quantity)
        VALUES (?, ?, ?)
        `, [mech_id, user_id,quantity])
}

// getCart
const getCart = async (cart_id) => {
    const [cartItems] = await pool.query(`
        SELECT * FROM cart WHERE cart_id = ?
    `, [cart_id]);
    return cartItems;
};

// clear cart
const clearCart = async (user_ID) => {
    await pool.query(`
        DELETE FROM cart
        WHERE user_ID = ? 
    `, [user_ID]);
};

// 

// getUserIDForCart
const getUserID= async (emailAdd) => {
    const [[{user_ID}]] = await pool.query(`
    SELECT user_ID 
    FROM users 
    WHERE user_Email = ?
    `, [emailAdd])
    return user_ID
};

export{addToCartDB,deleteFromCart,getCart,getUserID,clearCart}