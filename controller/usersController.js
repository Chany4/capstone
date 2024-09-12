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


const updateUser = async (req, res) => {
    try {
        const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
        const userId = req.params.id;
        
        // Fetch the current user data
        const user = await getUserDB(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Update only the fields provided in the request body
        const updatedUser = {
            firstName: firstName ?? user.firstName,
            lastName: lastName ?? user.lastName,
            userAge: userAge ?? user.userAge,
            Gender: Gender ?? user.Gender,
            userRole: userRole ?? user.userRole,
            emailAdd: emailAdd ?? user.emailAdd,
            userPass: userPass ?? user.userPass,
            userProfile: userProfile ?? user.userProfile,
        };

        // Update the user in the database
        await updateUserDB(updatedUser, userId);

        res.status(200).send('User info was successfully updated');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('An error occurred while updating user info');
    }
};

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


// postLogin: async (req, res) => {
//         const { emailAdd, userPass } = req.body;
    
//         await login(emailAdd, userPass);
//         res.send();
//     },

    

export{fetchUsers,fetchUser,addUser,removeUser,updateUser,loginUser}