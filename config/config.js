import { config } from "dotenv";
import {createPool} from 'mysql2/promise'
config();

const pool = createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

export{pool}