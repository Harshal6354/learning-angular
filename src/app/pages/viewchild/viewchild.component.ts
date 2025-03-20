import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TempComponent } from '../temp/temp.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [TempComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
  mymessage:string=''
  @ViewChild('txt')textbox?:ElementRef
   @ViewChild(TempComponent)element?:TempComponent

  ngAfterViewInit(): void {
    const value=this.textbox?.nativeElement.value;
    debugger;
    const mymessage=this.element?.message
  }
}
