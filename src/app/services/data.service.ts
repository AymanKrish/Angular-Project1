import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails:any = {
    1000 : {acno:1000, username:"Anu", password:"abc123", balance:0},
    1001 : {acno:1001, username:"Amal", password:"abc123", balance:0},
    1002 : {acno:1002, username:"Arun", password:"abc123", balance:0},
    1003 : {acno:1003, username:"Akil", password:"abc123", balance:0}
  }
}