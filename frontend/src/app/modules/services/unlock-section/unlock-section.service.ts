import { Injectable } from '@angular/core';
import { unlockSectionI } from './unlock-section.interface';

@Injectable({
  providedIn: 'root',
})
export class UnlockSectionService {
  sectionData: Array<unlockSectionI> = [
    {
      title: 'Unlock Property Value',
      description: `Selling your property should be a rewarding experience, and at Estatein, we make sure it is.`,
      unlockCards: [
        {
          icon: 'bar_chart',
          title: 'Valuation Mastery',
          message:
            'Discover the true worth of your property with our expert valuation services.',
        },
        {
          icon: 'pie_chart',
          title: 'Strategic Marketing',
          message:
            'Selling a property requires more than just a listing; it demands a strategic marketing.',
        },
        {
          icon: 'save',
          title: 'Negotiation Wizardry',
          message:
            'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
        },
        {
          icon: 'campaign',
          title: 'Closing Success',
          message:
            'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
        },
      ],
      panel: {
        title: 'Unlock the Value of Your Property Today',
        msg: "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
      },
    },
    {
      title: 'Effortless Property Management',
      description: `Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership.`,
      unlockCards: [
        {
          icon: 'groups',
          title: 'Tenant Harmony',
          message:
            'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.',
        },
        {
          icon: 'engineering',
          title: 'Maintenance Ease',
          message:
            'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
        },
        {
          icon: 'account_balance',
          title: 'Financial Peace of Mind',
          message:
            'Managing property finances can be complex. Our financial experts take care of rent collection',
        },
        {
          icon: 'security',
          title: 'Legal Guardian',
          message:
            'Stay compliant with property laws and regulations effortlessly.',
        },
      ],
      panel: {
        title: 'Experience Effortless Property Management',
        msg: "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
      },
    },
    {
      title: 'Smart Investments, Informed Decisions',
      description: `Building a real estate portfolio requires a strategic approach.`,
      unlockCards: [
        {
          icon: 'storefront',
          title: 'Market Insight',
          message:
            'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
        },
        {
          icon: 'analytics',
          title: 'ROI Assessment',
          message:
            'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
        },
        {
          icon: 'tune',
          title: 'Customized Strategies',
          message:
            'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
        },
        {
          icon: 'diversity_2',
          title: 'Diversification Mastery',
          message:
            'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
        },
      ],
      panel: {
        title: 'Unlock Your Investment Potential',
        msg: "Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
      },
    },

  ];
  constructor() {}
  getSectionData = () => this.sectionData;
}
