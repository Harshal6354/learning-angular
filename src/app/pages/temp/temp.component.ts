import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
  selector: 'app-temp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent{
 @Input() message:string='';
  isloggedInUser:boolean=false;
  UserName:string='Rahul';
  @ViewChild('dynamicTem')dynamicTem?: TemplateRef<any>;
  @ViewChild('dynamicCpntainer',{read:ViewContainerRef})dynamicCpntainer:ViewContainerRef | undefined
  
  ChangetheLOAD(){
    if(this.dynamicTem){
      this.dynamicCpntainer?.createEmbeddedView(this.dynamicTem)
    }
  }

}
