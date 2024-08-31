import { pool } from "../config/config.js";

const getMechanicsDb = async () => {
    let [data] = await pool.query(`SELECT * FROM mechanical_parts `)
    return data;
}

const getMechanicDb = async (id) => {
    let [[data]] =  await pool.query('SELECT * FROM mechanical_parts WHERE mechanicalPartID = ?',[id])
}


const addMechanicDb = async (partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category) => {
    let [data] = await pool.query(`INSERT INTO mechanical_parts (partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category) VALUES(?,?,?,?,?,?,?,?,?,?) `,
    [partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category]  
    )   
    return data
}

const deleteMechanicDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM mechanical_parts WHERE mechanicalPartID = ?`, [id] 
    )
};

const updateMechanicDb = async(mechanicalPartID,partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category) => {
    await pool.query(
        `UPDATE mechanical_parts SET mechanicalPartID=?,partName=?, material=?, engineType=?, compatibleCarMake=?, imageURL=?, stockQuantity=?, warrantyPeriod=?, description=?, price=?, category=?`, [mechanicalPartID,partName, material, engineType, compatibleCarMake, imageURL, stockQuantity, warrantyPeriod, description, price, category] 
    )
};

const addToCartDb = async (fruit_ID, user_ID) => {
    await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
    [fruit_ID, user_ID] )
}

export{getMechanicsDb,getMechanicDb,addMechanicDb,deleteMechanicDb,updateMechanicDb,addToCartDb}