import express from 'express'
// import cors from 'cors'
import {router} from './routes/allRouter.js'

const port = process.env.PORT || 9001
const app = express()

// app.use(cors({
//     origin: 'http://localhost:8081',
//     credentials: true
// }))

app.use(express.static('public'))
app.use(express.json())

app.use('/bigTime', router)

app.listen(port, () => {
    console.log('http://localhost:'+port);
})