import { Router } from "express";
import {
  getMessages,
  sendMessages,
  editMessages,
} from "../controller/message.js";

const router = Router();

router.get("/message", getMessages);
router.post("/message", sendMessages);
router.patch("/message/:id", editMessages);

export default router;
