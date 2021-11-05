import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RecommendationService {
  constructor(private http: HttpClient) {}

  getExpressRecommendation(data: any): Observable<any> {
    const url = environment.apiUrl + `/easyrecommend`;
    return this.http.post<any>(url, data);
  }

  getDetailedRecommendation(data: any): Observable<any> {
    const url = environment.apiUrl + `/personalrecommend`;
    return this.http.post<any>(url, data);
  }

  public checkAPI(): Observable<any> {
    const url = environment.apiUrl + `/ping`;
    return this.http.get<any>(url);
  }

  public initAPI() : Observable<any> {
    const url = environment.apiUrl + `/init`;
    return this.http.get<any>(url);
  }
}
