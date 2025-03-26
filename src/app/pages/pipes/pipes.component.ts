import { Component, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  
master=inject(MasterService)
currentvalue:string=''
currentvalue2:string=''
constructor(){
  this.master.onRolechange$.subscribe((role:string)=>{
      this.currentvalue=role;
  })
  this.master.Role$.subscribe((role2:string)=>{
      this.currentvalue2=role2;
  }) 
}
userlist(data:any){
  this.master.getSessionData()
}

}
