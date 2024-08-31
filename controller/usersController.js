import {getUsersDB,getUserDB,addUserDB,removeUserDB,updateUserDB} from '../model/usersDb.js'
import { hash } from 'bcrypt'

// USER INFO
const fetchUsers = async (req, res) => {
    res.json(await getUsersDB())
}

const fetchUser = async (req, res) => {
    res.json(await getUserDB(req.params.id))
}
firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile

const addUser = async (req, res) => {
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let hashedP = await hash(userPass, 10)
    await addUserDB(firstName, lastName, userAge, Gender, userRole, emailAdd, hashedP, userProfile)
    res.send('Data was successfully inserted')
}

const removeUser = async (req, res) => {
    await removeUserDB(req.params.id)
    res.send('Data was successfully removed')
}

const updateUser = async (req, res) => {
    let {name, surname, age, coding_lang, car, eye_color} = req.body
    let user = await getUserDB(req.params.id)

    name ? name = name : name = user.name
    surname ? surname = surname : surname = user.surname
    age ? age = age : age = user.age
    coding_lang ? coding_lang = coding_lang : coding_lang = user.fav_coding_lang
    car ? car = car : car = user.fav_car
    eye_color ? eye_color = eye_color : eye_color = user.eye_color

    await updateUserDB(name, surname, age, coding_lang, car, eye_color, req.params.id)
    res.send('User info was successfully updated')
}

const loginUser = (req, res) => {
    res.json({
        message: 'You have signed in successfully!', 
        token: req.body.token
    })
}


export{fetchUsers,fetchUser,addUser,removeUser,updateUser,loginUser}