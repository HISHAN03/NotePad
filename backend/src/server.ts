import express from "express";
import { Random4DigitNumber } from "./functions"
import mongoose from 'mongoose';
import { Text, IText } from "./db"
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
const port = 2000;
app.use(cors())
app.use(express.json());
dotenv.config();

if (process.env.MONGO_URL) {

  mongoose.connect(process.env.MONGO_URL, { dbName: "notepad" }).then(() => { console.log("mongodb-connected"); });
}

app.post('/send', async (req, res) => {
  try {
    const { description } = req.body;
    const roomNo = Random4DigitNumber();
    const newText: IText = new Text({
      roomNo,
      description,
    });
    await newText.save();
    console.log("Data saved to the database:", newText);
    return res.status(200).json({ success: true, id: roomNo });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }

})

app.post("/retrieve", async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ success: false, error: 'Missing roomNo parameter' });
    }
    const result = await Text.findOne({ roomNo: id });

    if (result) {
      console.log("Success");
      return res.status(200).json({ success: true, description: result.description });
    } else {
      console.log("Fail");
      return res.status(404).json({ success: false, error: 'Document not found' });
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});