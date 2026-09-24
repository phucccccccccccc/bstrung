import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT || 3306),

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
});

const testConnection = async () => {
  try {
    const connection = await db.getConnection();

    console.log("Ket noi MySQL thanh cong");

    connection.release();
  } catch (error) {
    console.error(
      "Loi ket noi MySQL:",
      error.message
    );
  }
};

testConnection();

export default db;