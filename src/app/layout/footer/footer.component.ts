import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataCarrierService } from 'src/app/services/data-carrier.service';
import { songData } from 'src/app/shared/datasets';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,AfterViewInit {
  // @ViewChild(PlayerComponent) play!: PlayerComponent;
  public data!:songData;
  public obj!: songData;
  constructor(public dt: DataCarrierService) { }
  ngAfterViewInit(): void {
    // this.play.player(this.obj);
  }

  ngOnInit(): void {
       
  }
  
}
