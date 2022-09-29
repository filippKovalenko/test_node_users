import Router from "express";
import controller from "./controller/authController.js";
import postController from "./controller/postController.js";
import { registerValidation, loginValidation ,createPosrValidation} from "./middleware/validations.js";
import handleValidationErrors from "./middleware/handleValidationErrors.js";
import roleMiddleware from "./middleware/roleMiddleware.js";
import authMiddleware from "./middleware/authMiddleware.js";

const router = new Router();

router.post("/registr", registerValidation, handleValidationErrors, controller.registr);
router.post("/login", loginValidation, handleValidationErrors, controller.login);
router.get("/users", roleMiddleware("admin"), controller.getUser);
router.patch("/role/:id", roleMiddleware("admin"), controller.editUser);
router.delete("/users/:id", roleMiddleware("admin"), controller.deleteUser);

router.get("/posts", authMiddleware, postController.get);
router.post("/create", createPosrValidation,handleValidationErrors,roleMiddleware("admin" && "editor"), postController.create);
router.get("/posts/:id", authMiddleware, postController.getItem);
router.patch("/posts/:id", createPosrValidation,handleValidationErrors,roleMiddleware("admin" && "editor"), postController.edit);
router.delete("/posts/:id", roleMiddleware("admin"), postController.delete);

export default router;
