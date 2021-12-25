import express from 'express';
import routes from './routes/index';
const app = express();
const port = process.env.PORT || 9000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
