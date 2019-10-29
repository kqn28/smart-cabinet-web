import { SmartCabinetEnv } from '../../core/server/smart-cabinet-env';
import { SmartCabinetUser } from '../../core/user/smart-cabinet-user';

export class RootState {
  constructor(public smartCabinetEnv: SmartCabinetEnv | null, public user: SmartCabinetUser | null) {}
}
