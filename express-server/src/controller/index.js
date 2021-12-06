import regristroMp from "./registroMp";
import registroPt from "./registroPt"
import { Router } from "express";

const router = Router();

router.use("/registroMp", regristroMp);
router.use("/registroPt", registroPt)

export default router;
