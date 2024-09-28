function setCorsHeader(req, res, next) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authoriztion",
  });
  next()
}

export default setCorsHeader