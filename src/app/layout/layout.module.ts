import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { PlayerComponent } from './player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { SepFooterComponent } from './sep-footer/sep-footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FooterComponent,
    FooterOnlyLayoutComponent,
    HeaderComponent,
    MainLayoutComponent,
    SidebarComponent,
    PlayerComponent,
    SepFooterComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FlexLayoutModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    MainLayoutComponent,
    FooterOnlyLayoutComponent
  ],
})
export class LayoutModule { }
