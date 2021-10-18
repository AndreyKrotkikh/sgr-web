import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RecommendationService {
  constructor(private http: HttpClient) {}

  getExpressRecommendation(data: any): Observable<any> {
    const url = environment.apiUrl + '/get-express';
    return this.http.post<any>(url, data);
  }

  getDetailedRecommendation(data: any): Observable<any> {
    const url = environment.apiUrl + `/get-detailed`;
    return this.http.get<any>(url);
  }
}
