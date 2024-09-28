import { Router } from "express";
import { getAllFaqs } from "./controller.js";

const router = new Router()

router.get("/", getAllFaqs)

export default router