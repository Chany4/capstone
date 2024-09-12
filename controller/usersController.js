import {getUsersDB,getUserDB,addUserDB,removeUserDB,updateUserDB} from '../model/usersDb.js'
import { hash } from 'bcrypt'

// USER INFO
const fetchUsers = async (req, res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req, res) => {
    res.json(await getUserDB(req.params.id))
    console.log(req.params.id);   
}

const addUser = async (req, res) => {
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let hashedP = await hash(userPass, 10)
    await addUserDB(firstName, lastName, userAge, Gender, userRole, emailAdd, hashedP, userProfile)
    res.send('Data was successfully inserted')
}

// const updateUser = async (req, res) => {
//     let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
//     let user = await getUserDB(req.params.id)

//     firstName ? firstName = firstName : firstName = user.firstName ;
//     lastName ? lastName = lastName : lastName = user.lastName ;
//     userAge ? userAge = userAge : userAge = user.userAge; 
//     Gender ? Gender = Gender : Gender = user.Gender; 
//     userRole ? userRole = userRole : userRole = user.userRole; 
//     emailAdd ? emailAdd = emailAdd : emailAdd = user.emailAdd; 
//     userPass ? userPass = userPass : userPass = user.userPass
//     userProfile ? userProfile = userProfile : userProfile = user.userProfile;

//     await updateUserDB(firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, req.params.id)
//     res.send('User info was successfully updated')
// }


const updateUser = async (req,res)=>{
    let {firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile} = req.body
    try{
        let user = await getUserDB(req.params.id)

        firstName? firstName=firstName : firstName = user.firstName
        lastName? lastName=lastName : lastName = user.lastName
        userAge? userAge=userAge : userAge = user.userAge
        Gender? Gender=Gender : Gender = user.Gender
        userRole? userRole=userRole : userRole = user.userRole
        emailAdd? emailAdd=emailAdd : emailAdd = user.emailAdd
        userProfile? userProfile=userProfile : userProfile = user.userProfile
        if(userPass){
            hash(userPass,10,async (err,hashedP)=>{
                if(err){
                    console.log(hashedP)
                }    
                userPass = hashedP
                console.log(userPass);
                
                await updateUserDB(req.params.id,firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP,userProfile)
            })
            
        }else{
            userPass = user.userPass
            console.log(userPass);
            await editUsersDb(req.params.id,firstName,lastName,userAge,Gender,userRole,emailAdd,userPass,userProfile)
        }
        res.status(202).json({message:"User updated successfully"})
    }catch(err){
        res.status(404).json({err:"There is an issue with updating the user"})    
        throw err
    }
}


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