import messageModel from "../models/messageModel.js";

export const getMessages = async (req, res) => {
  try {
    const message = await messageModel.find();
    res.status(200).json({ status: "success", message });
  } catch (error) {
    res.status(404).json({ status: "failed", error });
  }
};

export const sendMessages = async (req, res) => {
  try {
    const message = await messageModel.create({
      ...req.body,
      timeStamp: new Date().toISOString(),
    });
    res
      .status(200)
      .json({ status: "success", message, response: "Message Sent" });
  } catch (error) {
    res
      .status(404)
      .json({ status: "failed", error, response: "Failed to send" });
  }
};

export const editMessages = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await messageModel.findById(id);
    if (!message) return res.send("Failed to open");

    const updateMessage = await messageModel.findByIdAndUpdate(id, {
      isRead: true,
    });
    res.status(200).json({ status: "success", updateMessage });
  } catch (error) {
    res.status(404).json({ status: "failed", error });
  }
};
