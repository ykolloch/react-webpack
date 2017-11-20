import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from '../components/App';
import DataApi from 'state-api/DataApi';
import config from 'config'

const serverRender = async () => {
const response = await axios.get(`http://${config.host}:${config.port}/data`);
const api = new DataApi(response.data);

const initialData = {
  posts: api.getPosts(),
  users: api.getUsers(),
};

  return {
    initialMarkup: ReactDOMServer.renderToString(
        <App initialData={initialData} />
    ),
    initialData,
  }
};

export default serverRender;
