import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NewrelapiService } from 'src/app/services/newrelapi.service';
import { songData } from 'src/app/shared/datasets';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<songData>();
  constructor(public api : NewrelapiService) { }
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
