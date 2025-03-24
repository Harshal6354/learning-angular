import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';


import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule


@Component({
  selector: 'app-tem-form',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './tem-form.component.html',
  styleUrl: './tem-form.component.css'
})
export class TemFormComponent {

  studentObj:any={
    firstname:'',
    lastname:'',
    username:'',
    city:'',
    state:'',
    zipcode:'',
    isAgreeALLterm:false

  }
  myVlaue:any;
  submit(){
    debugger;
    this.myVlaue=this.studentObj;
  }
  resetform(){
    this.studentObj={
      firstname:'',
    lastname:'',
    username:'',
    city:'',
    state:'',
    zipcode:'',
    isAgreeALLterm:false
    }
  }
}
