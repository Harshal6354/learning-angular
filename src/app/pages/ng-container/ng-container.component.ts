import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TempComponent } from "../temp/temp.component";

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule, TempComponent],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent  implements OnInit{
  ngOnInit() :void{
    this.getUser();
    
  }
isvisible:boolean=true;
api_key='https://projectapi.gerasim.in/api/CollegeProject/getProjectByUser'
http=inject(HttpClient)
userlist:any[]=[]
isApi:Boolean=false;
 
getUser(){
  this.isApi=true;
  this.http.get(`${this.api_key}`).subscribe((res:any)=>{
    this.userlist=res;
    this.isApi=false;
  })
 }

}
