import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioappComponent } from './audioapp.component';

const routes: Routes = [{ path: '', component: AudioappComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioappRoutingModule { }
