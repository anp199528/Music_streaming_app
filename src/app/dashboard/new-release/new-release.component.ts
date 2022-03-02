import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataCarrierService } from 'src/app/services/data-carrier.service';
import { NewrelapiService } from 'src/app/services/newrelapi.service';
import { songData } from 'src/app/shared/datasets';
import { PlayerComponent } from '../../layout/player/player.component';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.css']
})
export class NewReleaseComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<songData>();

  constructor(public api : NewrelapiService, public dt:DataCarrierService) { }
  public music!: songData[];
    ngOnInit(): void {
      this.api.apiCall().subscribe((data)=>{
        this.music=data;
      });
    }
    public player(obj:songData){
      this.dt.dataSub.next(obj);
      console.log(obj);
      
    }
}
