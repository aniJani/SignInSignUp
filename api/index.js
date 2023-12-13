import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to Mongoose');
})
    .catch((err) => console.log(err));
const app = express();

app.listen(3000, (err, res) => {
    console.log('server listening on port 3000');
})

app.use(express.json());
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});