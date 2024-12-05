import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

await connectDB();

app.get('/', (req, res) => {
  res.send('Welcome To ENSI Clubs Management App! version : 1');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
