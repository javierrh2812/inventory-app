import { Router } from "express";
import { reporteMp, guardarRegistroMp } from "../services/registroMp";

const router = Router();

router.get("/reporte",  reporteMp);
router.post("/", guardarRegistroMp);

export default router;
