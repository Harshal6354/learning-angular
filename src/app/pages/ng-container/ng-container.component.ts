import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css'],
})
export class NgContainerComponent implements OnInit {
  http = inject(HttpClient);
  isvisible: boolean = true;
  isApi: boolean = false;
  userlist: any[] = [];
  userlist2: any[] = [];
  api_key = 'https://jsonplaceholder.typicode.com/users';
  api2 = 'https://picsum.photos/v2/list?page=2&limit=5';

  // /api/api/CollegeProject/getProjectByUser

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.isApi = true;
    this.http.get<any[]>(this.api_key).subscribe((res) => {
      this.userlist = res;
      this.isApi = false;
    });
  }
  getImg() {
    this.http.get(this.api2).subscribe((res: any) => {
      this.userlist2 = res;
    });
  }

  getapi() {
    this.getUser();
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
