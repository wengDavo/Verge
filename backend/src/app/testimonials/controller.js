import db from "../../core/db.js";

export function getAllTestimonials(req, res) {
  const sql = `SELECT id, rating, title, review, user_name, user_location FROM testimonials`;
  db.all(sql, [], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      res.json(row);
    }
  });
}
