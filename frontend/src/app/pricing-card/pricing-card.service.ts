import { Injectable } from '@angular/core';
import { pricingCardI } from './pricing-card.interface';

@Injectable({
  providedIn: 'root',
})
export class PricingCardService {
  private pricingCardData: Array<pricingCardI> = [
    {
      title: 'Additional Fees',
      pricingBreakdown: [
        {
          title: 'Property Transfer Tax',
          price: '25,000',
          description: 'Based on the sale price and local regulations',
        },
        {
          title: 'Legal Fees',
          price: '3,000',
          description:
            'Approximate cost for legal services, including title transfer',
        },
        {
          title: 'Home Inspection',
          price: '500',
          description: 'Recommended for due diligence',
        },
        {
          title: 'Property Insurance',
          price: '1,200',
          description: 'Annual cost for comprehensive property insurance',
        },
        {
          title: 'Mortgage Fees',
          price: 'Varies',
          description:
            'If applicable, consult with your lender for specific details',
        },
      ],
    },
    {
      title: 'Monthly Costs',
      pricingBreakdown: [
        {
          title: 'Property Taxes',
          price: '1,250',
          description:
            'Approximate monthly property tax based on the sale price and local rates',
        },
        {
          title: `Homeowners' Association Fee`,
          price: '300',
          description:
            'Approximate cost for legal services, including title transfer',
        },
      ],
    },
    {
      title: 'Total Initial Costs',
      pricingBreakdown: [
        {
          title: 'Listing Price',
          price: '1,250,000',
          description: '',
        },
        {
          title: `Additional Fees`,
          price: '29,700',
          description:
            'Property transfer tax, legal fees, inspection, insurance',
        },
        {
          title: `Down Payment`,
          price: '250,000',
          description: '20%',
        },
        {
          title: `Mortgage Amount`,
          price: '1,000,000',
          description: 'If applicable',
        },
      ],
    },
    {
      title: 'Monthly Expenses',
      pricingBreakdown: [
        {
          title: 'Property Taxes',
          price: '1,250',
          description: '',
        },
        {
          title: `Homeowners' Association Fee`,
          price: '300',
          description: '',
        },
        {
          title: `Mortgage Payment`,
          price: '',
          description: 'Varies based on terms and interest rate',
        },
        {
          title: `Property Insurance`,
          price: '100',
          description: 'Approximate monthly cost',
        },
      ],
    },
  ];
  constructor() {}

  getPricingData() {
    return this.pricingCardData;
  }
}
