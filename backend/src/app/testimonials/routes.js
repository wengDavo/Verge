import { Router } from "express";
import { getAllTestimonials } from "./controller.js";

const router = new Router();

router.get("/", getAllTestimonials);

export default router;