import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Analyst, Keyword } from '../models/fxchart.model';

@Injectable({
  providedIn: 'root'
})
export class FxchartService {
  apiUrl: string = "http://localhost:7000/api";
  constructor(
    private http: HttpClient,
    ) { }
    getAnalysts() : Observable<Analyst>{
      let headers = new HttpHeaders(); 
      headers = headers.set("Content-Type","application/json");
      let params = new HttpParams();
      return this.http.get<Analyst>(this.apiUrl + "/analysts",{ headers: headers, params: params})
    }
    registerAnalyst(model: Analyst) : Observable<any>{
      let headers = new HttpHeaders()
      headers = headers.set("Content-Type","application/json");
      let params = model;
      return this.http.post(this.apiUrl+"/analysts",params,{headers: headers});
    }
    getAnalystCount() : Observable<any>{
      let headers = new HttpHeaders(); 
      headers = headers.set("Content-Type","application/json");
      let params = new HttpParams();
      return this.http.get<any>(this.apiUrl + "/analysts/:count",{ headers: headers, params: params})
    }
    getKeywords() : Observable<Keyword>{
      let headers = new HttpHeaders(); 
      headers = headers.set("Content-Type","application/json");
      let params = new HttpParams();
      return this.http.get<Keyword>(this.apiUrl + "/keywords",{ headers: headers, params: params})
    }
    getKeywordCount() : Observable<any>{
      let headers = new HttpHeaders(); 
      headers = headers.set("Content-Type","application/json");
      let params = new HttpParams();
      return this.http.get<any>(this.apiUrl + "/keywords/:count",{ headers: headers, params: params})
    }
    registerKeyword(model: Keyword) : Observable<any>{
      let headers = new HttpHeaders()
      headers = headers.set("Content-Type","application/json");
      let params = model;
      return this.http.post(this.apiUrl+"/keywords",params,{headers: headers});
    }
  }
  