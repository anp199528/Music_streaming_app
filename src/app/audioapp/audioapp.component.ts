import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MusicapiService } from '../services/musicapi.service';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{selectedSong.name}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
          actors: {{selectedSong.actors}}<br>
          artist: {{selectedSong.artist}}<br>
     released on: {{selectedSong.releasedon}}<br>
    </div>
    <audio controls>
  
  <source [src]="selectedSong.songs_url" type="audio/mpeg">

    </audio>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent implements OnInit {
  @Input() public selectedSong: any;


  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit(): void {
    console.log(this.selectedSong);

  }

}




@Component({
  selector: 'app-audioapp',
  templateUrl: './audioapp.component.html',
  styleUrls: ['./audioapp.component.css']
})
export class AudioappComponent implements OnInit {
  public music: any;
  public musicarr: any = [];

  constructor(public modalService: NgbModal, public musicapi: MusicapiService) {
    this.musicapi.apiCall().subscribe((data) => {
      this.music = data;
      this.musicarr = this.music;
      console.log(this.musicarr);
    })
  }


  ngOnInit(): void {
  }

  open(obj: any) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.selectedSong = obj;
  }

}
