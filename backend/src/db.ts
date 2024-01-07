import mongoose, { Document, Model } from 'mongoose';

interface IText extends Document {
  roomNo: number;
  description: string;
  expiresAt: Date;
}

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


const Text: Model<IText> = mongoose.model<IText>('Text', textSchema);
export { Text, IText };
