import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }
  onchangeRol$:Subject<string>=new Subject<string>
}
