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

const updateMechanicDb = async (partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description, id) => {
    try {
      // Ensure `pool.query` is using the correct database pool connection
      const result = await pool.query(
        `UPDATE mechanicalParts 
         SET partName=?, material=?, engineType=?, compatibleCarMake=?, imageURL=?, price=?, category=?, stockQuantity=?, warrantyPeriod=?, description=? 
         WHERE mechanicalPartID=?`, 
        [partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description, id]
      );
      return result; // Return result if needed for further processing
    } catch (error) {
      console.error('Error updating mechanic database:', error);
      throw error; // Rethrow the error if you want to handle it in the calling function
    }
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