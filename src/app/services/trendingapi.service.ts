import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { songData } from '../shared/datasets';

@Injectable({
  providedIn: 'root'
})
export class TrendingapiService {
  constructor(private http:HttpClient) { }
  apiCall():Observable<songData[]>
  {    
    return this.http.get<songData[]>("assets/data/trending.json");
  }
}
