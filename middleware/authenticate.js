import { compare, hash } from "bcrypt";
import { getUserDbByEmail } from "../model/usersDb.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()

const checkUser = async (req, res, next) => {
    const {emailAdd, userPass} = req.body;
    
    let user = (await getUserDbByEmail(emailAdd))
    
    let result = await compare(userPass, user.userPass)
    if (result==true) {
        let token = jwt.sign({emailAdd: emailAdd}, process.env.SECRET_KEY, {expiresIn: '1h'})
        console.log(token);

        req.body.token = token
        req.body.user = user
        
        next()
        return
    } else {
        res.send('Invalid password')
    }
}

const verifyAToken = (req, res, next) => {
    let {cookie} = req.headers
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1]

    // console.log(cookie);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.json({message: 'Token has expired'})
            return
        }
        req.body.user = decoded.username
        next()
    })
}

export { checkUser, verifyAToken }