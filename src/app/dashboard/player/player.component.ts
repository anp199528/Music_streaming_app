import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { songData } from 'src/app/shared/datasets';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  public audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadedmetadata",
    "loadstart"
  ];
  public currentTime=0;
  public duration=0;
  public duration1: string="00:00:00";
  public currentTime1: string="00:00:00";
  public seek=0;
  public flag=true;
  public audioobj=new Audio();
  constructor() { }

  ngOnInit(): void {
  }

  public streamObservable(url:string) {
    return new Observable(observer=> {
      // Play audio
      this.audioobj.src = url;
      this.audioobj.load();
      this.audioobj.play();
      
      const handler = (event: Event)=> {
        // this.updateStateEvents(event);
        // observer.next(event);
        console.log(event);
        this.seek=this.audioobj.currentTime;
        this.duration=this.audioobj.duration;
        this.duration1=this.timeFormat(this.audioobj.duration);
        this.currentTime=this.audioobj.currentTime;
        this.currentTime1=this.timeFormat(this.audioobj.currentTime);
      };

      this.addEvents(this.audioobj, this.audioEvents, handler);
      return () => {
        // Stop Playing
        this.audioobj.pause();
        this.audioobj.currentTime = 0;
        // remove event listeners
        this.removeEvents(this.audioobj, this.audioEvents, handler);
      };
    });
  }

  public addEvents(obj :HTMLAudioElement, events: string[], handler:(event: Event) => void) {
    events.forEach(event => {
      // this.flag=false;
      obj.addEventListener(event, handler);
    });
  }

  public removeEvents(obj :HTMLAudioElement, events: string[], handler:(event: Event) => void) {
    events.forEach(event => {
      // this.flag=true;
      obj.removeEventListener(event, handler);
    });
  }

  public player(obj: songData){
    // this.playData=obj;
    // this.flag=!this.flag;
    // console.log(obj,this.playData);
    // this.icon=obj.icon;
    this.streamObservable(obj.songs_url).subscribe(event=>{});
    this.flag=false;
  }

  setSeekTo(event:any){
    console.log(event);
  }

  play(){
    this.flag=false;
    this.audioobj.play();
    // this.audioobj.currentTime=0;
  }
  pause(){
    this.flag=true;
    this.audioobj.pause();
  }
  stop(){
    this.flag=true;
    this.audioobj.pause();
    this.audioobj.currentTime=0;
  }
  // setVolume(ev:any){
  //   this.audioobj.volume=ev.target.value;
  //   // console.log(ev);
  // }
  timeFormat(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

}
