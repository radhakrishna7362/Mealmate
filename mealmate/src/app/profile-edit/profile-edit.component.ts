import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  constructor(private _router: Router,private router:ActivatedRoute,private authService: AuthService,private snackbarService:SnackbarService) { }
  _id

  form={username:null,name:null,address:null,city:null,state:null,pincode:null,dob:null,phone:null,email:null,gender:null,aboutme:null}
  
  formData={
    username:new FormControl(''),
    name:new FormControl('',[Validators.required,Validators.minLength(2)]),
    address: new FormControl(''),
    city: new FormControl('',[Validators.pattern('[a-zA-Z ]*')]),
    state: new FormControl('',[Validators.pattern('[a-zA-Z ]*')]),
    pincode: new FormControl('',[Validators.pattern('[0-9]*')]),
    dob: new FormControl(''),
    phone:new FormControl('',[Validators.maxLength(10),Validators.pattern('[0-9]*'),Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    gender: new FormControl(''),
    aboutme: new FormControl('')
  }

  nameError() {
    if (this.formData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.formData.name.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  cityError(){
    if (this.formData.city.hasError('pattern')) {
      return 'City should not contain numbers';
    }
  }

  stateError(){
    if (this.formData.state.hasError('pattern')) {
      return 'State should not contain numbers';
    }
  }

  pincodeError(){
    if(this.formData.pincode.hasError('pattern')){
      return 'Pincode must be a 6 digit number'
    }
  }

  phoneError(){
    if(this.formData.phone.hasError('pattern')){
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
    this.router.params.subscribe((params)=>{
      this._id=params.id;
      this.authService.getProfile(this._id).subscribe((data:any)=>{
        this.formData.username.setValue(data.username);
        this.formData.name.setValue(data.name);
        this.formData.address.setValue(data.address);
        this.formData.city.setValue(data.city);
        this.formData.state.setValue(data.state);
        this.formData.pincode.setValue(data.pincode);
        this.formData.dob.setValue(data.dob);
        this.formData.phone.setValue(data.phone);
        this.formData.email.setValue(data.email);
        this.formData.gender.setValue(data.gender);
        this.formData.aboutme.setValue(data.aboutme);
      })
    });
  }

  onSubmit(){
    this.form.username=this.formData.username.value;
    this.form.name=this.formData.name.value;
    this.form.address=this.formData.address.value;
    this.form.city=this.formData.city.value;
    this.form.state=this.formData.state.value;
    this.form.pincode=this.formData.pincode.value;
    this.form.dob=this.formData.dob.value;
    this.form.phone=this.formData.phone.value;
    this.form.email=this.formData.email.value;
    this.form.gender=this.formData.gender.value;
    this.form.aboutme=this.formData.aboutme.value;
    this.authService.editProfile(this._id,this.form).subscribe(
      (res)=>{
        this.snackbarService.success("Profile Updated Successfully!!!",'Success')
        this._router.navigate(['/yourprofile',this._id])
      }
    );
  }
  
}
