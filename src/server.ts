import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import { router } from './routes/main/main.js';

const app = express();

const port = 3000;

app.use(compression({ filter: () => true }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(helmet.hidePoweredBy());
app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`We are living on ${port}`);
});
