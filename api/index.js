import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to Mongoose');
})
    .catch((err) => console.log(err));
const app = express();

app.listen(3000, (err, res) => {
    console.log('server listening on port 3000');
})