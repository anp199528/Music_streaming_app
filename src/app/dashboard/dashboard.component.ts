import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MusicapiService } from '../services/musicapi.service';
import { songData } from '../shared/datasets';
import { PlayerComponent } from '../layout/player/player.component';
import { DataCarrierService } from '../services/data-carrier.service';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './ngbd-modal-content.component.html'
})
export class NgbdModalContent implements OnInit {
  @Input() public selectedSong: any;
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public music!: songData[];
  public displayedColumns: string[] = ['movie', 'icon', 'name', 'songs_duration', 'artist'];
  public listData!: MatTableDataSource<songData>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public playData!: songData;
  public toggle:boolean=true;
//  @ViewChild(PlayerComponent) play!: PlayerComponent;
  // public icon!:string;
 
  // public time!: number;
  
  constructor(public modalService: NgbModal, public musicapi: MusicapiService, public dt:DataCarrierService) { }
  // ngAfterViewInit(): void {
  //   // this.listData = new MatTableDataSource<songData>(this.music);
  //   // this.listData.sort = this.sort;
  //   this.listData.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.musicapi.apiCall().subscribe((data) => {      
      this.music = data;
      this.listData = new MatTableDataSource<songData>(this.music);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }
  player(obj: songData){
    this.dt.dataSub.next(obj);
  }

  open(obj: songData) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.selectedSong = obj;
  }

  cardToggle(x:boolean){
    this.toggle=x;
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listData.filter = filterValue.trim().toLowerCase();
    if (this.listData.paginator) {
      this.listData.paginator.firstPage();
    }
    // console.log(this.listData);
    
  }

  
}
