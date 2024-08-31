import { pool } from "../config/config.js";

const getInteriorExteriorsDb = async () => {
    let [data] = await pool.query(`SELECT * FROM interiorExterior`)
    return data;
}

const getInteriorExteriorDb = async (id) => {
    let [[data]] =  await pool.query('SELECT * FROM interiorExterior WHERE interiorExteriorID = ?',[id])
}


const addInteriorExteriorDb = async ( name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category) => {
    let [data] = await pool.query(`INSERT INTO interiorExterior ( name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category) VALUES(?,?,?,?,?,?,?,?,?,?) `,
    [ name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category]  
    )   
    return data
}

const deleteInteriorExteriorDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM interiorExterior WHERE interiorExteriorID = ?`, [id] 
    )
};

const updateInteriorExteriorDb = async(interiorExteriorID, name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category) => {
    await pool.query(
        `UPDATE interiorExterior SET interiorExteriorID =?, name=?, material=?, color=?, compatibleCarMake=?, price=?, stockQuantity=?, warrantyPeriod=?, description=?, imageURL=?, category=?`, [interiorExteriorID, name, material, color, compatibleCarMake, price, stockQuantity, warrantyPeriod, description, imageURL, category] 
    )
};

// const addToCartDb = async (fruit_ID, user_ID) => {
//     await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
//     [fruit_ID, user_ID] )
// }

export{getInteriorExteriorsDb,getInteriorExteriorDb,addInteriorExteriorDb,deleteInteriorExteriorDb,updateInteriorExteriorDb,addToCartDb}