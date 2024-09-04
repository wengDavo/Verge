import { unlockCardI } from '../unlock-card/unlock-card.interface';
import { unlockPanelI } from '../unlock-panel/unlock-panel.interface';

export interface unlockSectionI {
  title: string;
  description: string;
  unlockCards: Array<unlockCardI>;
  panel: unlockPanelI;
}
