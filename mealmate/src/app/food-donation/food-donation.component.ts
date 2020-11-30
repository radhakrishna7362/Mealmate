import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {FoodDonationService} from '../services/food-donation.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-food-donation',
  templateUrl: './food-donation.component.html',
  styleUrls: ['./food-donation.component.css']
})
export class FoodDonationComponent implements OnInit {

  donationForm:FormGroup;
  // form
  form={fname:null,lname:null,add1:null,add2:null,city:null,pincode:null,phone:null,email:null}
  constructor(private snackbarService:SnackbarService,private router:Router,private donationService:FoodDonationService) {
    
  }

  formData={
    fname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
    lname:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
    add1:new FormControl('',[Validators.required]),
    add2:new FormControl(''),
    city:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    pincode:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(6),Validators.maxLength(6)]),
    phone:new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  }

  firstNameError() {
    if (this.formData.fname.hasError('required')) {
      return 'First Name is required';
    }
    else if(this.formData.fname.hasError('pattern')){
      return 'First Name must contain only Characters'
    }
    else if(this.formData.fname.hasError('minlength')){
      return 'First Name must be a minimum length of 2';
    }
  }

  lastNameError(){
    if (this.formData.lname.hasError('required')) {
      return 'Last Name is required';
    }
    else if(this.formData.lname.hasError('pattern')){
      return 'Last Name must contain only Characters'
    }
    else if(this.formData.lname.hasError('minlength')){
      return 'Last Name must be a minimum length of 2';
    }
  }

  add1Error() {
    if (this.formData.add1.hasError('required')) {
      return 'Address1 is required';
    }
  }

  cityError(){
    if (this.formData.city.hasError('required')) {
      return 'City is required';
    }
    else if(this.formData.city.hasError('pattern')){
      return 'City must contain only Characters'
    }
  }

  pincodeError(){
    if (this.formData.pincode.hasError('required')) {
      return 'Pincode is required';
    }
    else if(this.formData.pincode.hasError('pattern')){
      return 'Pincode must be a 6 digit number'
    }
    else if(this.formData.pincode.hasError('minlength')){
      return 'Pincode must be 6 digits';
    }
    else if(this.formData.pincode.hasError('maxlength')){
      return 'Pincode must be 6 digits';
    }
  }

  phoneError(){
    if (this.formData.phone.hasError('required')) {
      return 'Mobile no is required';
    }
    else if(this.formData.phone.hasError('pattern')){
      return 'Mobile no must be a 10 digit number'
    }
    else if(this.formData.phone.hasError('minlength')){
      return 'Mobile no. must be 10 digits';
    }
    else if(this.formData.phone.hasError('maxlength')){
      return 'Mobile no. must be 10 digits';
    }
  }

  emailError(){
    if (this.formData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.formData.email.hasError('pattern')){
      return 'Email must be a valid email Address';
    }
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.form.fname=this.formData.fname.value;
    this.form.lname=this.formData.lname.value;
    this.form.add1=this.formData.add1.value;
    this.form.add2=this.formData.add2.value;
    this.form.city=this.formData.city.value;
    this.form.pincode=this.formData.pincode.value;
    this.form.phone=this.formData.phone.value;
    this.form.email=this.formData.email.value;
    this.donationService.addForm(this.form).subscribe(
      (res)=>{
        this.snackbarService.info("Thank you!!!",'Info');
        this.router.navigate(['/donationthanks'])
      }
    );
  }

}
