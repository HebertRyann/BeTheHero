import express from 'express';
import cors from 'cors';

import './database/connections'
const app = express();
import routes from './routes';

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log('Server is started in port 3333');
});
