import { Router } from "express";
import { signInController } from "../controllers/signInControllers.js";
import { signUpController } from "../controllers/signUpController.js";
import { validateData } from "../middlewares/validateData.js";
import signInSchema from "../schemas/signInSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";


const usersRouter = Router()

usersRouter.post("/signup", validateData(signUpSchema), signUpController)
usersRouter.post("/signin", validateData(signInSchema), signInController)
usersRouter.get("/users/me")

export default usersRouter