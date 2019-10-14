import * as dotenv from 'dotenv';
import { parseSmartCabinetEnv, SmartCabinetEnv } from '../core/server/smart-cabinet-env';

export class EnvironmentVars {
  private constructor(public smartCabinetEnv: SmartCabinetEnv, public databaseUrl: string) {}

  public static fromProcessEnv() {
    dotenv.config();
    const smartCabinetEnv = parseSmartCabinetEnv(process.env.SMART_CABINET_ENV);
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not provided');
    }
    return new EnvironmentVars(smartCabinetEnv, databaseUrl);
  }
  public static fromArguments(smartCabinetEnv: SmartCabinetEnv, databaseUrl: string) {
    return new EnvironmentVars(smartCabinetEnv, databaseUrl);
  }
}
