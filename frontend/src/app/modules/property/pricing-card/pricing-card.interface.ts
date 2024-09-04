import { pricingCardUnitI } from '../pricing-card-unit/pricing-card-unit.interface';

export interface pricingCardI {
  title: string;
  pricingBreakdown: Array<pricingCardUnitI>;
}
