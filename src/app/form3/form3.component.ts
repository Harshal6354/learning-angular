import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component {
  username = '';
  password = '';
  isLoggedIn = false;

  constructor() {
   
  }

  onLogin() {
    if (this.username=='harshal' && this.password=='123') {
      document.cookie = `username=${this.username}; path=/; max-age=3600`; 
      this.isLoggedIn = true;
      alert('Login successful!');
    }
  }

 
}
