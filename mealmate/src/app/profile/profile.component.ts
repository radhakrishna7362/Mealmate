import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: ActivatedRoute,private authService: AuthService) { }
  _id

  form={name:null,address:null,city:null,state:null,pincode:null,dob:null,phone:null,email:null,gender:null,aboutme:null}
  
  formData={
    username:new FormControl(''),
    name:new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    dob: new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    gender: new FormControl({value:'',disabled: true}),
    aboutme: new FormControl('')
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

}