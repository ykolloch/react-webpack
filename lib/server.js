import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import {data} from './testData.json';


const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', {...initialContent});
});

app.listen(config.port, function listenHandler() {
  console.log(`Running on ${config.port}`);
});
