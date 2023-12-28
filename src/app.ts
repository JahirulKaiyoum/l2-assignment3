/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response,NextFunction } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import router from './app/routes';
// const port = 5000;
app.use(express.json());
app.use(cors());

app.use("/api/v1/",router)
console.log('here');

const getAController = (req: Request, res: Response) => {
  const a = 10;
  res.status(200).json({
    success: true,
    data:a
  });
};

app.get('/', getAController);
app.use(globalErrorHandler)
app.use(notFound)
export default app;
