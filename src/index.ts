import express, { Application } from 'express';
import routes from './routes/index';
const app: Application = express();
const port: string | number = process.env.PORT || 9000;

app.use('/api', routes);

app.listen(port, (): void => {
  console.log(`server started at localhost:${port}`);
});

export default app;
