import { SmartCabinetUser } from 'core/smart-cabinet-user';
import { SmartCabinetEnv } from '../../core/server/smart-cabinet-env';

export class RootState {
  constructor(public smartCabinetEnv: SmartCabinetEnv | null, public user: SmartCabinetUser | null) {}
}
