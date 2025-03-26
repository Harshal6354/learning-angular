import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-tem-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './tem-form.component.html',
  styleUrl: './tem-form.component.css'
})
export class TemFormComponent {
  master = inject(MasterService)
  

  studentObj = {
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    state: '',
    zipcode: '',
  }
  myVlaue: any;
  // submit() {
  //  this.master.user$=this.studentObj
  // }
   submit() {
    this.master.setUserData(this.studentObj);
    debugger;
    console.log('User Data Stored:', this.master.getUserData());
  }
 
  resetform() {
    this.studentObj = {
      firstname: '',
      lastname: '',
      email: '',
      city: '',
      state: '',
      zipcode: '',
    }
 
  }




}
