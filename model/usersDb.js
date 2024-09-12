import { pool } from "../config/config.js"

const getUsersDB = async () => {
    let [data] = await pool.query(`
        SELECT * FROM users
        `)
    return data
}

const getUserDB = async (id) => {
    let [[data]] = await pool.query(`
        SELECT * FROM users
        WHERE userID = ?
        `, [id])
    return data
}
// userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile

const getUserDbByEmail = async (emailAdd) => {
    let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd =?' , [emailAdd])
    
    return data?data:''
}

const addUserDB = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) => {
    await pool.query(`
        INSERT INTO users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) 
        VALUES (?, ?, ?, ?, ?, ?, ? ,?)
        `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
}

// userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile

const updateUserDB = async (firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,id)=>{
    let [data] = await pool.query(`
        UPDATE users
        SET firstName=?,lastName=?,userAge=?,Gender=?,userRole=?,emailAdd=?,userPass=?,userProfile=?
        WHERE userID = ?`,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,id])
    return data
}

const removeUserDB = async (id) => {
    await pool.query(`DELETE FROM users WHERE userID = ?`, [id])
}


// const login = async (emailAdd) => {
//   try {
//     const [[{ userPass }]] = await pool.query(`
//       SELECT userPass 
//       FROM users 
//       WHERE emailAdd = ?
//     `, [emailAdd]);
    
//     return userPass;
//   } catch (error) {
//     console.error("Error occurred during login:", error);
//     throw new Error("An error occurred during login. Please try again later.");
//   }
// };



export{getUsersDB,getUserDB,addUserDB,removeUserDB,updateUserDB,getUserDbByEmail}