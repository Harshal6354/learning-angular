import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
@Component({
    selector: 'app-temp',
    imports: [CommonModule],
    templateUrl: './temp.component.html',
    styleUrl: './temp.component.css'
})
export class TempComponent {
  isloggedInUser: boolean = false;
  UserName: string = 'Rahul';
  @ViewChild('dynamicTem') dynamicTem?: TemplateRef<string>;
  @ViewChild('dynamicCpntainer', { read: ViewContainerRef })
  dynamicCpntainer?: ViewContainerRef;

  ChangetheLOAD() {
    if (this.dynamicTem) {
      this.dynamicCpntainer?.createEmbeddedView(this.dynamicTem);
    }
  }
}
