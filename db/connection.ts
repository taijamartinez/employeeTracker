import { Pool } from 'pg';
import dotenv from "dotenv";

//load environment variables from .env file
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'employee_db',
    password: process.env.DB_PASSWORD || "",
    port: Number(process.env.DB_PORT) || 5432,
});

// Check if connection works
pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("Database connection error:", err);
    } else {
        console.log("Database connected successfully at:", res.rows[0].now);
    }
});

export default pool;