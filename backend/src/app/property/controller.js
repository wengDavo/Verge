import db from "../../core/db.js";

export function getAllProperties(req, res) {
  const sql =
    "SELECT id, image_url, name, description, bedroom, bathroom, type, price, location FROM property";
  db.all(sql, [], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Internal server error");
    }
    res.json(row);
  });
}

export async function getProperty(req, res) {
  const sql =
    "SELECT id, image_url, name, description, bedroom, bathroom, type, price, location FROM property WHERE id=(?)";
  const propertyId = req.params.id;
  
  const promise = new Promise((resolve, reject) => {
    db.get(sql, [propertyId], (err, row) => {
      if (err) {
        reject(new Error("Internal server error", { cause: 500 }));
      }
      if (!row) {
        reject(new Error("Property not found", { cause: 404 }));
      }
      resolve(row);
    });
  });

  try {
    const property = await promise;
    res.status(200).send(property);
  } catch (error) {
    console.error(error.cause);
    res.status(error.cause).send(error.message);
  }

}
