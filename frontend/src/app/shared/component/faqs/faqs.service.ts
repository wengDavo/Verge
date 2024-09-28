import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { faqI } from './faq/faq.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqsService {
  private http = inject(HttpClient)
   getAllFaqs(): Observable<faqI>{
    return this.http.get<faqI>(`${environment.baseUrl}/faqs`)
   }
}
