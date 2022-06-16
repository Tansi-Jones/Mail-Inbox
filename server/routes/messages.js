import { Router } from "express";
import { getMessages, sendMessages } from "../controller/message.js";

const router = Router();

router.get("/message", getMessages);
router.post("/message", sendMessages);
router.patch("/message", sendMessages);

export default router;
