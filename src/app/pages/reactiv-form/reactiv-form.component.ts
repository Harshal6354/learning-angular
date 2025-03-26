import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './reactiv-form.component.html',
  styleUrl: './reactiv-form.component.css'
})
export class ReactivFormComponent {
 
  studentData:FormGroup=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(4)]),
    secondname:new FormControl(""),
    username:new FormControl("",[Validators.email]),
    city:new FormControl(""),
    state:new FormControl(""),
    zipcode:new FormControl(""),
    isAcceptable:new FormControl(""),
  })
  submit:any;
    invalid:Boolean=true;
  onsubmit(){
    if (this.studentData.valid) {
      console.log('Form Submitted:', this.studentData.value);
    }
    else {
      console.log("invalid");
    }
  }
}
