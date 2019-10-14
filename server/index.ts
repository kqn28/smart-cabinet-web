import * as express from 'express';
// import socketIO from "socket.io";
import { api } from './server';

export default (app, http) => {
  app.use(express.json());
  app.use('/api', api);
};
