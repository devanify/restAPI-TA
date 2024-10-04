import mysql from 'mysql2/promise';
import 'dotenv/config';

const dbPool = mysql.createPool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE
});

export default dbPool;
