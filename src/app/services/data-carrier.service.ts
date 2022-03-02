import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { songData } from '../shared/datasets';

@Injectable({
  providedIn: 'root'
})
export class DataCarrierService {

  constructor() { }
  public dataSub = new Subject<songData>();

}
