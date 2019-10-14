import { SmartCabinetEnv } from '../../core/server/smart-cabinet-env';

export class RootState {
  constructor(public smartCabinetEnv: SmartCabinetEnv | null) {}
}
