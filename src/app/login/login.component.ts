import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  data="Your Perfect Banking Partner" //String Interpollation
  
  inputplaceholder = "Account Number" //Property Binding

  acno = ""
  //acno:any
  psw:any
  //pass = ""

  userDetails:any = {
    1000 : {acno:1000, username:"Anu", password:"abc123", balance:0},
    1001 : {acno:1001, username:"Amal", password:"abc123", balance:0},
    1002 : {acno:1002, username:"Arun", password:"abc123", balance:0},
    1003 : {acno:1003, username:"Akil", password:"abc123", balance:0}
  }

  constructor() {}

  ngOnInit(): void {

  }

  login() {             // Event Binding
    alert("BLAAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHH")
  }
  acnoChange(event:any) {    //Event handling using $event
    this.acno = event.target.value
    console.log(this.acno);
    
  }
  pswChange(event:any) {
    this.psw = event.target.value  // when calling a variable again in oops, give this in beginning.
    console.log(this.psw);
    
  }
}
