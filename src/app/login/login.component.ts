import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Your Perfect Banking Partner" //String Interpollation
  
  inputplaceholder = "Account Number" //Property Binding

  acno:any   
  // //acno:any
  psw:any
  // //psw = ""

  constructor(private router:Router, private ds:DataService) {}
            // Dependency Injection - Access Specifier
  ngOnInit(): void {

  }

  login() {             // Event Binding
    var acnum = this.acno
    var psw = this.psw
    const result = this.ds.login(acnum,psw)
    if (result) {
      alert ('Login Success')
      this.router.navigateByUrl('dashboard')
    }
    else {
      alert ('Incorrect Account Number or Password')
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
