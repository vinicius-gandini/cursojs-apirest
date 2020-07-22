import { Router } from "express";

import fotoController from "../controllers/FotoController";

const router = new Router();

// upload.single() define que apenas um arquivo é enviado por vez, com a "id" especificada
router.post("/", fotoController.store);

export default router;
