import db from "../../core/db.js";

export function getAllFaqs(req, res) {
  const sql = `SELECT * FROM faqs`;
  db.all(sql, [], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      res.json(row);
    }
  });
}
