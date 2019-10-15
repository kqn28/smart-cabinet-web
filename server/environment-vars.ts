import * as dotenv from 'dotenv';
import { parseSmartCabinetEnv, SmartCabinetEnv } from '../core/server/smart-cabinet-env';

export class EnvironmentVars {
  private constructor(
    public smartCabinetEnv: SmartCabinetEnv,
    public databaseUrl: string,
    public encryptionKey: string,
  ) {}

  public static fromProcessEnv() {
    dotenv.config();
    const smartCabinetEnv = parseSmartCabinetEnv(process.env.SMART_CABINET_ENV);
    const databaseUrl = process.env.DATABASE_URL;
    const encryptionKey = process.env.ENCRYPTION_KEY;
    if (!databaseUrl) {
      throw new Error('DATABASE_URL is not provided');
    }
    if (!encryptionKey) {
      throw new Error('ENCRYPTION_KEY is not provided');
    }
    return new EnvironmentVars(smartCabinetEnv, databaseUrl, encryptionKey);
  }
  public static fromArguments(smartCabinetEnv: SmartCabinetEnv, databaseUrl: string, encryptionKey: string) {
    return new EnvironmentVars(smartCabinetEnv, databaseUrl, encryptionKey);
  }
}
