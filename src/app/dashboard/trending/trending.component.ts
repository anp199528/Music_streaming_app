import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrendingapiService } from 'src/app/services/trendingapi.service';
import { songData } from 'src/app/shared/datasets';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<songData>();
  constructor(public api : TrendingapiService) { }
public music!: songData[];
  ngOnInit(): void {
    this.api.apiCall().subscribe((data)=>{
      this.music=data;
    });
  }
  public player(obj:songData){
    this.messageEvent.emit(obj);
  }
}
