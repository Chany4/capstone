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
userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile

const addUserDB = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) => {
    await pool.query(`
        INSERT INTO users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) 
        VALUES (?, ?, ?, ?, ?, ?, ? ,?)
        `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])
}

const removeUserDB = async (id) => {
    await pool.query(`
        DELETE FROM users
        WHERE userID = ?
        `, [id])
}

const updateUserDB = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile,userID) => {
    await pool.query(`
        UPDATE users
        SET firstName = ?, 
        lastName = ?, 
        userAge = ?, 
        Gender = ?, 
        userRole = ?,
        emailAdd = ?
        userPass = ?,
        userProfile = ?
        WHERE userID = ?
        `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile,userID])
}

export{getUsersDB,getUserDB,addUserDB,removeUserDB,updateUserDB}