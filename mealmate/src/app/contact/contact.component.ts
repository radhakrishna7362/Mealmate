import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerUserData = { name: null, email: null, phone: null, feedback: null }
  
  registerData={
    name:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phone:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]),
    contactus:new FormControl('',[Validators.required,Validators.minLength(25)])
  }
  
  hide = true;
  
  emailError() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('pattern')){
      return "This doesn't look like an email address";
    }
  }
  
  nameError(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('pattern')){
      return 'Name must contain only Characters'
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  phoneError(){
    if (this.registerData.phone.hasError('required')) {
      return 'Phone no. is required';
    }
    else if(this.registerData.phone.hasError('pattern')){
      return 'Mobile no must be a 10 digit number'
    }
    else if(this.registerData.phone.hasError('minlength')){
      return 'Phone no. must be of 10 digits';
    }
    else if(this.registerData.phone.hasError('maxlength')){
      return 'Phone no. must be of 10 digits';
    }
  }

  commentError(){
    if (this.registerData.contactus.hasError('required')) {
      return 'Comment is required';
    }
    else if(this.registerData.contactus.hasError('minlength')){
      return 'Comment must be alteast 25 letters';
    }
  }

  constructor(private contactService:ContactService,
              private _router: Router,private snackbarService:SnackbarService) { }

  ngOnInit() {
  }

  registerUser() {
    this.registerUserData.email=this.registerData.email.value;
    this.registerUserData.name=this.registerData.name.value;
    this.registerUserData.phone=this.registerData.phone.value;
    this.registerUserData.feedback=this.registerData.contactus.value;
    this.contactService.feedback(this.registerUserData)
    .subscribe(
      res => {
        this.snackbarService.info("THANKS FOR YOUR FEEDBACK!!!",'Info')
        this._router.navigate(['/donationthanks'])
      });      
  }

}
