import { pool } from "../config/config.js";

const getToolsDb = async () => {
    let [data] = await pool.query(`SELECT * FROM other`)
    return data;
}

const getToolDb = async (id) => {
    let [[data]] =  await pool.query('SELECT * FROM other WHERE productID = ?',[id])
}


const addToolDb = async ( itemName, category, size, color, price, stockQuantity, warrantyPeriod, description) => {
    let [data] = await pool.query(`INSERT INTO other ( itemName, category, size, color, price, stockQuantity, warrantyPeriod, description,imageURL) VALUES(?,?,?,?,?,?,?,?,?) `,
    [ itemName, category, size, color, price, stockQuantity, warrantyPeriod, description]  
    )   
    return data
}

const deleteToolDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM other WHERE productID = ?`, [id] 
    )
};

const updateToolDb = async(productID,itemName, category, size, color, price, stockQuantity, warrantyPeriod, description,imageURL) => {
    await pool.query(
        `UPDATE other SET productID =?,itemName =?, category =?, size =?, color =?, price =?, stockQuantity =?, warrantyPeriod =?, description =?, imageURL=?`, [productID,itemName, category, size, color, price, stockQuantity, warrantyPeriod, description,imageURL] 
    )
};

// const addToCartDb = async (fruit_ID, user_ID) => {
//     await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
//     [fruit_ID, user_ID] )
// }

export{getToolsDb,getToolDb,addToolDb,deleteToolDb,updateToolDb,addToCartDb}