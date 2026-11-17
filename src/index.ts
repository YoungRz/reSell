import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API jalan' });
});

app.listen(3000, () => console.log('Server jalan di port 3000'));