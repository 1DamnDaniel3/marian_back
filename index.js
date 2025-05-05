import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();



import {
  userRouter, tourRouter, regionRouter,
  activityRouter, customRouter, reviewRouter,
  authRouter, applicationRouter, tourActivitiesRouter,
  contactsRouter,
} from './routes/index.js';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRouter);
app.use('/api', userRouter);
app.use('/api', tourRouter);
app.use('/api', regionRouter);
app.use('/api', activityRouter);
app.use('/api', customRouter);
app.use('/api', reviewRouter);
app.use('/api', applicationRouter);
app.use('/api', tourActivitiesRouter);
app.use('/api', contactsRouter);



app.listen(PORT, () => console.log(`server startet on post${PORT}`));