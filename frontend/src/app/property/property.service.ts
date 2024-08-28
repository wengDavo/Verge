import { Injectable } from '@angular/core';
import { propertyI } from './property.interface';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor() {}
  propertiesData: Array<propertyI> = [
    {
      id: 1,
      img: '/assets/images/laptop.jpg',
      name: 'Rustic Retreat Cottage',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community ',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
    },
    {
      id: 2,
      img: '/assets/images/laptop.jpg',
      name: 'Seaside Serenity Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
    },
    {
      id: 3,
      img: '/assets/images/laptop.jpg',
      name: 'Wen Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
    },
    {
      id: 4,
      img: '/assets/images/laptop.jpg',
      name: 'Wen Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
    },
    {
      id: 5,
      img: '/assets/images/laptop.jpg',
      name: 'Wen Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
    },
  ];
  getPropertiesData(){
    return this.propertiesData;
  }
}
