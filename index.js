import express from 'express'
import cors from 'cors'
import {router} from './routes/allRouter.js'

const port = process.env.PORT || 9001
const app = express()


// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

app.use(cors())

app.use(express.static('public'))
app.use(express.json())

app.use('/bigTime', router)

app.listen(port, () => {
    console.log('http://localhost:'+port);
})