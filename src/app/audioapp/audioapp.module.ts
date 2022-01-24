import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudioappRoutingModule } from './audioapp-routing.module';
import { AudioappComponent } from './audioapp.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AudioappComponent
  ],
  imports: [
    CommonModule,
    AudioappRoutingModule,
    NgbModule
  ]
})
export class AudioappModule { }
