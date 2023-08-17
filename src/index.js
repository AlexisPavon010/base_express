import express from 'express'
import cors from 'cors'

import { PORT } from './config/index.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use('', (req, res) => {
  res.send('Hello World!.')
})

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})