import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  
  myReactiveForm: FormGroup = this.fb.group({
    email: [null, [Validators.required,Validators.email]],
    password:[null,[Validators.required]],
    mobile:[null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
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
