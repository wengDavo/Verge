import { Router } from "express";
const router = new Router();

import { getAllProperties, getProperty } from "./controller.js";


router.get("/", getAllProperties);
router.get("/:id", getProperty)

export default router;
