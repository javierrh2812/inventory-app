import { Router } from "express";
import {  guardarRegistroPt, reportePt } from "../services/registroPt";

const router = Router();

router.get("/reporte",  reportePt);
router.post("/", guardarRegistroPt);

export default router;
