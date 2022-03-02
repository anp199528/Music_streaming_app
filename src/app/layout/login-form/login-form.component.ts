import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  myReactiveForm: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password:[null,[Validators.required]]
 });
  constructor(public activeModal: NgbActiveModal,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get formControls(): { [key: string]: AbstractControl } {  
    return this.myReactiveForm.controls;
	}
  onSubmit(): void {
    console.log(this.myReactiveForm.value);
    this.myReactiveForm.reset();
  }


}
