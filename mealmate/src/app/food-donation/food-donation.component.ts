import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {FoodDonationService} from '../services/food-donation.service';

@Component({
  selector: 'app-food-donation',
  templateUrl: './food-donation.component.html',
  styleUrls: ['./food-donation.component.css']
})
export class FoodDonationComponent implements OnInit {

  donationForm:FormGroup;
  // form
  form={fname:null,lname:null,add1:null,add2:null,city:null,pincode:null,phone:null,email:null}
  constructor(private fb:FormBuilder,private router:Router,private donationService:FoodDonationService) {
    
  }

  formData={
    fname:new FormControl('',[Validators.required,Validators.minLength(2)]),
    lname:new FormControl('',[Validators.required,Validators.minLength(2)]),
    add1:new FormControl('',[Validators.required]),
    add2:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    phone:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.email]),
  }

  getErrorMessage() {
    if (this.formData.fname.hasError('required')) {
      return 'First Name is required';
    }
    else if(this.formData.fname.hasError('minlength')){
      return 'First Name must be a minimum length of 2';
    }
  }

  getMsg(){
    if (this.formData.lname.hasError('required')) {
      return 'Last Name is required';
    }
    else if(this.formData.lname.hasError('minlength')){
      return 'Last Name must be a minimum length of 2';
    }
  }

  Error() {
    if (this.formData.add1.hasError('required')) {
      return 'Address1 is required';
    }
  }

  err() {
    if (this.formData.add2.hasError('required')) {
      return 'Address2 is required';
    }
  }

  msg(){
    if (this.formData.city.hasError('required')) {
      return 'City is required';
    }
  }

  Msg(){
    if (this.formData.pincode.hasError('required')) {
      return 'Pincode is required';
    }
    else if(this.formData.pincode.hasError('minlength')){
      return 'Pincode must be 6 digits';
    }
    else if(this.formData.pincode.hasError('maxlength')){
      return 'Pincode must be 6 digits';
    }
  }

  ErrMsg(){
    if (this.formData.phone.hasError('required')) {
      return 'Mobile no is required';
    }
    else if(this.formData.phone.hasError('minlength')){
      return 'Mobile no. must be 10 digits';
    }
    else if(this.formData.phone.hasError('maxlength')){
      return 'Mobile no. must be 10 digits';
    }
  }

  getError(){
    if (this.formData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.formData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }

  ngOnInit(): void {
    // this.createForm();
  }

  // createForm(){
  //   this.donationForm=this.fb.group({
  //     fname:['',[Validators.required]],
  //     lname:['',[Validators.required]],
  //     add1:['',[Validators.required]],
  //     add2:['',[Validators.required]],
  //     city:['',[Validators.required]],
  //     pincode:['',[Validators.required]],
  //     phone:['',[Validators.required]],
  //     email:['',[Validators.required]]
  //   });
  // }

  onSubmit(){
    // this.form=this.donationForm.value;
    this.form.fname=this.formData.fname.value;
    this.form.lname=this.formData.lname.value;
    this.form.add1=this.formData.add1.value;
    this.form.add2=this.formData.add2.value;
    this.form.city=this.formData.city.value;
    this.form.pincode=this.formData.pincode.value;
    this.form.phone=this.formData.phone.value;
    this.form.email=this.formData.email.value;
    console.log(this.form);
    this.donationService.addForm(this.form).subscribe(
      (res)=>{
        this.router.navigate(['/donationthanks'])
      }
    );
    this.form = null;
    // this.donationForm.reset({
    //   fname:'',
    //   lname:'',
    //   add1:'',
    //   add2:'',
    //   city:'',
    //   pincode:'',
    //   phone:'',
    //   email:'',
    // });
    // this.router.navigate(['/view']);
  }

}
