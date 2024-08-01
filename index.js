import { routeHello, routeAPINames } from "./route.js";
import express from 'express';

const server = express();
const port = 3000;

server.get('/', (req, res) => {
  const response = routeHello(req, res);
  res.send(response);

 
});

server.get('/api/names', async (req, res) => {
  let response;
  try {
    response = await routeAPINames(req, res);
  } catch (err) {
    console.error(err);
  }
res.send(response);
});

server.listen(port, function() {
  console.log("Server is running on port: " + port);
});

