import { inject, Injectable } from '@angular/core';
import { propertyI } from './property.interface';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  http = inject(HttpClient);
  constructor() {}
  propertiesData: Array<propertyI> = [
    {
      id: 1,
      image_url: '/assets/images/laptop.jpg',
      name: 'Rustic Retreat Cottage',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community ',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
      location: 'abuja',
    },
    {
      id: 2,
      image_url: '/assets/images/laptop.jpg',
      name: 'Seaside Serenity Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
      location: 'abuja',
    },
    {
      id: 3,
      image_url: '/assets/images/laptop.jpg',
      name: 'Wen Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
      location: 'abuja',
    },
    {
      id: 4,
      image_url: '/assets/images/laptop.jpg',
      name: 'Wen Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
      location: 'abuja',
    },
    {
      id: 5,
      image_url: '/assets/images/laptop.jpg',
      name: 'Wen Villa',
      description:
        'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
      bedRoom: 2,
      bathRoom: 3,
      type: 'Villa',
      price: '550,000',
      location: 'abuja',
    },
  ];
  getPropertiesData(){
    // return this.propertiesData;
    return this.http.get(`${environment.baseUrl}/property`)
  }

  getProperty(propertyId: any): Observable<propertyI>{
    return this.http.get<propertyI>(`${environment.baseUrl}/property/${propertyId}`)
  }
}
