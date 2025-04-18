import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


import { userRouter, tourRouter } from './routes/index.js';

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000', 
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true // Если вам нужно передавать куки или авторизационные данные
//   }));

app.use(express.json());
app.use(cookieParser()); 

app.use('/api', userRouter);
app.use('/api', tourRouter);



app.listen(PORT, ()=> console.log(`server startet on post${PORT}`));