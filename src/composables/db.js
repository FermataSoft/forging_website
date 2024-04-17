import mysql from 'mysql2'

export async function useDB(query) {
  const host = import.meta.env.VITE_DATABASE_HOST;
  const port = import.meta.env.VITE_DATABASE_PORT;
  const database = import.meta.env.VITE_DATABASE;
  const user = import.meta.env.VITE_DATABASE_USER;
  const password = import.meta.env.VITE_DATABASE_PASSWORD;

  const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "interiorsteel",
    user: "root",
    password: "root",
  }).promise()

  try {
    const [rows] = await connection.query(query)
    connection.end()
    return rows
  } catch (error) {
    throw new DatabaseError("Error in execution provided query!")
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}