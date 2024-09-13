import { pool } from "../config/config.js";

const getMechanicsDb = async () => {
    try{
      let [data] = await pool.query(`SELECT * FROM mechanicalParts `)
    return data;
    }catch(err){
      console.log(err);
      throw err
    }
}

const getMechanicDb = async (id) => {
    try{
      let [[data]] =  await pool.query(`SELECT * FROM mechanicalParts WHERE mechanicalPartID = ?`,[id]);
    return data;
    }catch(err){
      console.log(err);
      throw err;
      
    }
}


const addMechanicDb = async (partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description) => {
    try{
      let [data] = await pool.query(`INSERT INTO mechanicalParts (partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description) VALUES(?,?,?,?,?,?,?,?,?,?) `,
    [partName, material, engineType, compatibleCarMake, imageURL, price, category, stockQuantity, warrantyPeriod, description]  
    );
    }catch(error){
      console.log('Error adding to database:' ,error);
      throw error; 
    }
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
    try{
      let [data] = await pool.query(
        `DELETE FROM mechanicalParts WHERE mechanicalPartID = ?`, [id] 
    )
    }catch{err}{
      console.log(err);
      throw err;
      
    }
};


export{getMechanicsDb,getMechanicDb,addMechanicDb,deleteMechanicDb,updateMechanicDb}