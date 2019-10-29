import * as Express from 'express';
import { appApi } from './api/app-endpoint';
import { cabinetItemsApi } from './api/cabinet-items-endpoint';
import { usersApi } from './api/users-endpoint';

const api = Express.Router();

api.use('/App', appApi);
api.use('/Users', usersApi);
api.use('/CabinetItems', cabinetItemsApi);

export {api};
