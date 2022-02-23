import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
// import { PlayerComponent } from '../dashboard/player/player.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    FooterComponent,
    FooterOnlyLayoutComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent
  ],
})
export class LayoutModule { }
