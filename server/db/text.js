import mongoose from 'mongoose';

const textSchema = new mongoose.Schema({
  roomNo: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + 1 * 60 * 1000), 
    index: { expires: 0 } 
  }
});

const Text = new mongoose.model("Text", textSchema);

export default Text;
