import { pool } from "../config/config.js";

const getMechanicsDb = async () => {
    let [data] = await pool.query(`SELECT * FROM mechanicalParts `)
    return data;
}

const getMechanicDb = async (id) => {
    let [[data]] =  await pool.query(`SELECT * FROM mechanicalParts WHERE mechanicalPartID = ?`,[id]);
    return data;
}


const addMechanicDb = async (partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description) => {
    let [data] = await pool.query(`INSERT INTO mechanicalParts (partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description) VALUES(?,?,?,?,?,?,?,?,?,?) `,
    [partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description]  
    );
}

const updateMechanicDb = async(partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description,id) => {
    await pool.query(
        `UPDATE mechanicalParts SET partName=?, material=?, engineType=?, compatibleCarMake=?, imageURL=?,  price=?, category=?, stockQuantity=?, warrantyPeriod=?, description=? WHERE mechanicalPartID=?`, [partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description,id] 
    )
};

const deleteMechanicDb = async(id) => {
    let [data] = await pool.query(
        `DELETE FROM mechanicalParts WHERE mechanicalPartID = ?`, [id] 
    )
};




const addToCartDb = async (fruit_ID, user_ID) => {
    await pool.query (`INSERT INTO cart (fruit_ID, user_ID) VALUES(?,?) `,
    [fruit_ID, user_ID] )
}

export{getMechanicsDb,getMechanicDb,addMechanicDb,deleteMechanicDb,updateMechanicDb,addToCartDb}