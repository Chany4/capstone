import {getUsersDB,getUserDB,addUserDB,removeUserDB,updateUserDB} from '../model/usersDb.js'
import { hash } from 'bcrypt'

// USER INFO
// const fetchUsers = async (req, res) => {
//     res.json(await getUsersDB())
// }

const fetchUsers = async (req, res) => {
    try {
        // Attempt to fetch users from the database
        const users = await getUsersDB();

        // Check if users data was retrieved
        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });  // Not found, status code 404
        }

        // Respond with the users data
        res.status(200).json(users);  // Success, status code 200
    } catch (error) {
        // Handle unexpected errors
        console.error('Error fetching users:', error);  // Log the error for debugging purposes
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error, status code 500
    }
};


// const fetchUser = async (req, res) => {
//     res.json(await getUserDB(req.params.id))
//     console.log(req.params.id);   
// }

const fetchUser = async (req, res) => {
    try {
        // Extract the user ID from the request parameters
        const userId = req.params.id;

        // Log the user ID for debugging purposes
        console.log(`Fetching user with ID: ${userId}`);

        // Attempt to retrieve the user from the database
        const user = await getUserDB(userId);

        // Check if the user was found
        if (!user) {
            return res.status(404).json({ message: 'User not found' });  // Not found, status code 404
        }

        // Respond with the user data
        res.status(200).json(user);  // Success, status code 200
    } catch (error) {
        // Handle unexpected errors
        console.error('Error fetching user:', error);  // Log the error for debugging purposes
        res.status(500).json({ message: 'Internal Server Error' });  // Internal server error, status code 500
    }
};


const addUser = async (req, res) => {
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let hashedP = await hash(userPass, 10)
    await addUserDB(firstName, lastName, userAge, Gender, userRole, emailAdd, hashedP, userProfile)
    res.send('Data was successfully inserted')
}



const updateUser = async (req, res) => {
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getUserDB(req.params.id)

    firstName ? firstName = firstName : firstName = user.firstName ;
    lastName ? lastName = lastName : lastName = user.lastName ;
    userAge ? userAge = userAge : userAge = user.userAge; 
    Gender ? Gender = Gender : Gender = user.Gender; 
    userRole ? userRole = userRole : userRole = user.userRole; 
    emailAdd ? emailAdd = emailAdd : emailAdd = user.emailAdd; 
    userPass ? userPass = userPass : userPass = user.userPass
    userProfile ? userProfile = userProfile : userProfile = user.userProfile;

    await updateUserDB(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, req.params.id)
    res.send('User info was successfully updated')
}

// const updateUser = async (req,res)=>{
//     let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
//     try{
//         let user = await getUserDB(req.params.id)

//         firstName? firstName=firstName : firstName = user.firstName
//         lastName? lastName=lastName : lastName = user.lastName
//         userAge? userAge=userAge : userAge = user.userAge
//         Gender? Gender=Gender : Gender = user.Gender
//         userRole? userRole=userRole : userRole = user.userRole
//         emailAdd? emailAdd=emailAdd : emailAdd = user.emailAdd
//         userProfile? userProfile=userProfile : userProfile = user.userProfile
//         if(userPass){
//             hash(userPass,10,async (err,hashedP)=>{
//                 if(err){
//                     console.log(hashedP)
//                 }    
//                 userPass = hashedP
//                 console.log(userPass);
                
//                 await updateUserDB(req.params.id,firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
//             })
            
//         }else{
//             userPass = user.userPass
//             console.log(userPass);
//             await updateUserDB(req.params.id,firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)
//         }
//         res.status(202).json({message:"User updated successfully"})
//     }catch(err){
//         res.status(404).json({err:"There is an issue with updating the user"})    
//         throw err
//     }
// }


const removeUser = async (req, res) => {
    await removeUserDB(req.params.id)
    res.send('Data was successfully removed')
}


const loginUser = (req, res) => {
    res.json({
        message: 'You have signed in successfully!', 
        token: req.body.token,
        user: req.body.user
    })
}



export{fetchUsers,fetchUser,addUser,removeUser,updateUser,loginUser}