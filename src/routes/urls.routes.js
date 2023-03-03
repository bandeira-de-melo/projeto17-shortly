import { Router } from "express";
import { urlShortenController } from "../controllers/urlShortenController.js";
import { validateAuthData } from "../middlewares/validateAuthData.js";
import { urlSchema } from "../schemas/urlSchema.js";

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", validateAuthData(urlSchema), urlShortenController)
urlsRouter.get("/urls/:id")
urlsRouter.get("/urls/open/:shortUrl")
urlsRouter.delete("/urls/:id")
urlsRouter.get("/ranking")

export default urlsRouter