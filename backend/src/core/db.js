import sqlite3 from 'sqlite3';
import path from 'path'

const db = new sqlite3.Database(
  path.join(process.cwd(), 'verge.db'),
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Connected to the Verge databae");
    }
  });

export default db;