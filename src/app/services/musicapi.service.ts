import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicapiService {

  constructor(private http:HttpClient) { }
  apiCall():Observable<any>
  {
    return this.http.get<any>('assets/data/music.json');
  }

}
