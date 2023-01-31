import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  data="Your Perfect Banking Partner" //String Interpollation
  
  inputplaceholder = "Account Number" //Property Binding

  // acno = ""    
  // //acno:any
  // psw:any
  // //pass = ""

  userDetails:any = {
    1000 : {acno:1000, username:"Anu", password:"abc123", balance:0},
    1001 : {acno:1001, username:"Amal", password:"abc123", balance:0},
    1002 : {acno:1002, username:"Arun", password:"abc123", balance:0},
    1003 : {acno:1003, username:"Akil", password:"abc123", balance:0}
  }

  constructor() {}

  ngOnInit(): void {

  }

  // login() {             // Event Binding
  //   var acnum = this.acno
  //   var psw = this.psw
  //   var userDetails = this.userDetails
  //   if (acnum in userDetails) {
  //     if (psw == userDetails[acnum]["password"]) {
  //       alert("Login Success")
  //     }
  //     else {
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else {
  //     alert("Incorrect Account Number/ Account not Registered.")
  //   }
  // }

  login(a:any,b:any) {             // Event Binding
    var acnum = a.value
    var psw = b.value
    var userDetails = this.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert("Login Success")
      }
      else {
        alert("Incorrect Password")
      }
    }
    else {
      alert("Incorrect Account Number/ Account not Registered.")
    }
  }

  // acnoChange(event:any) {    //Event handling using $event
  //   this.acno = event.target.value
  //   console.log(this.acno);
    
  // }
  // pswChange(event:any) {
  //   this.psw = event.target.value  // when calling a variable again in oops, give this in beginning.
  //   console.log(this.psw);
    
  // }
}
