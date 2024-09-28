import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { testimonyI } from './testimony/testimony.interface';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
   private http = inject(HttpClient);

   getTestimonials(): Observable<testimonyI>{
    return this.http.get<testimonyI>(`${environment.baseUrl}/testimonials`)
   }
}
