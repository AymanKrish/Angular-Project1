import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  // //psw = ""

  psw = ""
  acno = ""

  userDetails:any = {
    1000 : {acno:1000, username:"Anu", password:"abc123", balance:0},
    1001 : {acno:1001, username:"Amal", password:"abc123", balance:0},
    1002 : {acno:1002, username:"Arun", password:"abc123", balance:0},
    1003 : {acno:1003, username:"Akil", password:"abc123", balance:0}
  }

  constructor(private router:Router, private ds:DataService) {}
            // Dependency Injection - Access Specifier
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
    var acnum = this.acno
    var psw = this.psw
    var userDetails = this.ds.userDetails
    if (acnum in userDetails) {
      if (psw == userDetails[acnum]["password"]) {
        alert("Login Success")
        this.router.navigateByUrl("dashboard")    // to navigate to dashboard page.
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
