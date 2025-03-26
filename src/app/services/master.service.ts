import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(){}

 public onRolechange$:Subject<string>=new Subject<string>
 
 public Role$:BehaviorSubject<string>=new BehaviorSubject<string>('')
 private userSubject = new BehaviorSubject<any>(null);
 user$ = this.userSubject.asObservable();

 // Update user data
 setUserData(user: any) {
   this.userSubject.next(user);
 }

 // Get user data
 getUserData() {
   return this.userSubject.value;
 }

 // Clear user data (for logout)
 clearUserData() {
   this.userSubject.next(null);
 }

}
