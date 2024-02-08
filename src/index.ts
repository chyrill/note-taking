import express from 'express';
import bodyParser from 'body-parser';
import noteRoutes from './note.routes';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
