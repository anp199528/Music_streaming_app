import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from '../login-form/login-form.component';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openLogin() {
    const modalRef = this.modalService.open(LoginFormComponent);
  }
  openSignUp() {
    const modalRef = this.modalService.open(SignUpFormComponent);
  }
}
