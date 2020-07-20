import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

// Não deveriam existir
router.get("/", loginRequired, userController.index);
router.get("/:id", userController.show);

// Rotas comuns
router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
