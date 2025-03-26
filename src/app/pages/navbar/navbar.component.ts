import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
    constructor(private master:MasterService) { }
    selectrole:string='';
    Myrole(role:string):void{
    this.master.onRolechange$.next(role)
    }
}
