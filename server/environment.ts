import { SmartCabinetEnv } from '../core/server/smart-cabinet-env';
import { EnvironmentVars } from './environment-vars';

export class Environment {
  private static _vars: EnvironmentVars | null = null;

  public static getEnvironmentVars() {
    if (this._vars === null) {
      this._vars = EnvironmentVars.fromProcessEnv();
    }
    return this._vars;
  }
  public static setEnvironmentVarsFromArguments(smartCabinetEnv: SmartCabinetEnv, databaseUrl: string) {
    this._vars = EnvironmentVars.fromArguments(smartCabinetEnv, databaseUrl);
  }
  public static resetEnvironmentVars() {
    this._vars = null;
  }
}
