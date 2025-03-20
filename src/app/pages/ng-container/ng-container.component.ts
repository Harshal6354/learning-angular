import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent  implements OnInit{
  ngOnInit(): void {
    this.getUser();
  }
 isvisible:boolean=true;
 api_key='https://projectapi.gerasim.in/api/CollegeProject/getProjectByUser'

 http=inject(HttpClient)
userlist:any[]=[]
 
 getUser(){
  this.http.get(`${this.api_key}`).subscribe((res:any)=>{
    this.userlist=res;
  })
  console.log("error")
 }
}
