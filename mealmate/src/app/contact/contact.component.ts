import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  registerUserData = { name: null, email: null, phone: null, feedback: null }
  
  registerData={
    name:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    contactus:new FormControl('',[Validators.required])
  }
  
  hide = true;
  
  getErrorMessage() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return "This doesn't look like an email address";
    }
  }
  
  getMessage(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  getMessagePhone(){
    if (this.registerData.name.hasError('required')) {
      return 'Phone no. is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Phone no. must be of 10 digits';
    }
    else if(this.registerData.name.hasError('maxlength')){
      return 'Phone no. must be of 10 digits';
    }
  }

  getErrorComment(){
    if (this.registerData.contactus.hasError('required')) {
      return 'Comment is required';
    }
  }

  constructor(private contactService:ContactService,
              private _router: Router,private snackbar:MatSnackBar) { }

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
        this.snackbar.open('THANKS FOR YOUR FEEDBACK!!', 'OK', {
          duration: 3000,
        });
        this._router.navigate(['/donationthanks'])
      });      
  }

}
