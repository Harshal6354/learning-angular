import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(){}

 public onRolechange$:Subject<string>=new Subject<string>
 
 public Role$:BehaviorSubject<string>=new BehaviorSubject<string>('')
 
 private userSubject = new BehaviorSubject<any>(this.getSessionData());

 user$ = this.userSubject.asObservable();

 // Store user data in BehaviorSubject and Session Storage
 setUserData(user: any) {
   this.userSubject.next(user);
   sessionStorage.setItem('userData', JSON.stringify(user)); // Save to session storage
 }

 // Retrieve user data from Session Storage
 getSessionData() {
   const data = sessionStorage.getItem('userData');
   return data ? JSON.parse(data) : null;
 }

 // Get current user data
 getUserData() {
   return this.userSubject.value;
 }

 

}
