import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  id: {
    type: String,
  },
  content: {
    type: String,
    trim: true,
    lowercase: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  subject: {
    type: String,
    trim: true,
    lowercase: true,
  },
  timeStamp: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model("Message", messageSchema);
