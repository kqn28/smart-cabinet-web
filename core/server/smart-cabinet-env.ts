export enum SmartCabinetEnv {
  Production = 'production',
  Staging = 'staging',
  Development = 'development',
}

export const SmartCabinetEnvs: SmartCabinetEnv[] = [
  SmartCabinetEnv.Production,
  SmartCabinetEnv.Staging,
  SmartCabinetEnv.Development,
];

export function parseSmartCabinetEnv(str: string): SmartCabinetEnv {
  switch (str) {
    case SmartCabinetEnv.Production:
      return SmartCabinetEnv.Production;
    case SmartCabinetEnv.Staging:
      return SmartCabinetEnv.Staging;
    case SmartCabinetEnv.Development:
      return SmartCabinetEnv.Development;
    default:
      throw Error(`Invalid SmartCabinetEnv value: ${str}`);
  }
}
