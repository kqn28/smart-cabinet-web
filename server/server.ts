import * as Express from 'express';
import { appApi } from './api/app-endpoint';
import { usersApi } from './api/users-endpoint';

const api = Express.Router();

api.use('/App', appApi);
api.use('/Users', usersApi);

export {api};
