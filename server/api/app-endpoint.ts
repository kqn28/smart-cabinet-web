import * as Express from 'express';
import { SmartCabinetClientEnvVars } from '../../core/server/smart-cabinet-client-env-vars';
import { Environment } from '../environment';

export const appApi = Express.Router();

appApi.get('/AppData', (req: Express.Request, res: Express.Response) => {
  try {
    const environmentVars = Environment.getEnvironmentVars();
    const clientEnvVars = new SmartCabinetClientEnvVars(environmentVars.smartCabinetEnv);
    res.send(clientEnvVars);
  } catch (err) {
    // tslint:disable-next-line: no-console
    console.error(err);
    res.sendStatus(500);
  }
});
