import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../fooddetails/fooddetails.component';

@Component({
  selector: 'app-fooddetails-receipe',
  templateUrl: './fooddetails-receipe.component.html',
  styleUrls: ['./fooddetails-receipe.component.css']
})
export class FooddetailsReceipeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FooddetailsReceipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
