import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {FoodDonationService} from '../services/food-donation.service';

@Component({
  selector: 'app-food-donation',
  templateUrl: './food-donation.component.html',
  styleUrls: ['./food-donation.component.css']
})
export class FoodDonationComponent implements OnInit {

  donationForm:FormGroup;
  form
  constructor(private fb:FormBuilder,private router:Router,private donationService:FoodDonationService) {
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.donationForm=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      add1:['',[Validators.required]],
      add2:['',[Validators.required]],
      city:['',[Validators.required]],
      pincode:['',[Validators.required]],
      phone:['',[Validators.required]],
      email:['',[Validators.required]]
    });
  }

  onSubmit(){
    this.form=this.donationForm.value;
    console.log(this.form);
    this.donationService.addForm(this.form).subscribe();
    this.form = null;
    this.donationForm.reset({
      fname:'',
      lname:'',
      add1:'',
      add2:'',
      city:'',
      pincode:'',
      phone:'',
      email:'',
    });
    // this.router.navigate(['/view']);
  }

}
