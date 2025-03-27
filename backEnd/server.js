import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

//connect to database
connectDB();

//connect to cloudinary
connectCloudinary();

//middleware
app.use(cors());
app.use(express.json());

//Api endpoints 
app.use('/api/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})