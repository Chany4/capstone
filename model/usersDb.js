import { pool } from "../config/config.js"

const getUsersDB = async () => {
    try{
        let [data] = await pool.query(`
            SELECT * FROM users
            `)
        return data
    }catch(error){
        console.log(error);
    }
}

const getUserDB = async (id) => {
    try{
        let [[data]] = await pool.query(`
            SELECT * FROM users
            WHERE userID = ?
            `, [id])
        return data
    }catch(err){
        console.log(err);
    }
}

const getUserDbByEmail = async (emailAdd) => {
    try{
        let [[data]] = await pool.query('SELECT * FROM users WHERE emailAdd =?' , [emailAdd])
    
    return data?data:''
    }catch(err){
        console.log(err);
    }
}

const addUserDB = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) => {
    try{
        await pool.query(`
            INSERT INTO users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) 
            VALUES (?, ?, ?, ?, ?, ?, ? ,?)
            `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
    }catch(err){
        console.log(err);
    }
}

// userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile

const updateUserDB = async (firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,id)=>{
    try{
        let [data] = await pool.query(`
            UPDATE users
            SET firstName=?,lastName=?,userAge=?,Gender=?,userRole=?,emailAdd=?,userPass=?,userProfile=?
            WHERE userID = ?`,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile,id])
        return data
    }catch(err){
    console.log(err);
    }
}

const removeUserDB = async (id) => {
    try{
        await pool.query(`DELETE FROM users WHERE userID = ?`, [id])
    }catch(err){
        console.log(err);
        
    }
}


export{getUsersDB,getUserDB,addUserDB,removeUserDB,updateUserDB,getUserDbByEmail}