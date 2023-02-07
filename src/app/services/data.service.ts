import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  currentUser:any
  currentAcno:any

  constructor() { }

  userDetails:any = {
    1000 : {acno:1000, username:"Anu", password:"abc123", balance:0, transaction:[]},
    1001 : {acno:1001, username:"Amal", password:"abc123", balance:0, transaction:[]},
    1002 : {acno:1002, username:"Arun", password:"abc123", balance:0, transaction:[]},
    1003 : {acno:1003, username:"Akil", password:"abc123", balance:0, transaction:[]}
  }
  register(uname:any,acno:any,psw:any) {
    if (acno in this.userDetails) {
      return false
    }
    else {
      this.userDetails[acno] = {acno,username:uname,password:psw,balance:0}
      // console.log(this.userDetails);
      
      return true
    }
  }

  login(acno:any,psw:any) {

    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]["password"]) {
        this.currentUser = userDetails[acno]["username"]
        // console.log(this.currentUser);
        
        this.currentAcno = acno

        return true
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }

  deposit(acnum:any,password:any,amount:any) {
    let userDetails = this.userDetails
    var amnt = parseInt(amount)   //convert string to number

    if (acnum in userDetails) {
      if (password == userDetails[acnum]["password"]) {
        userDetails[acnum]["balance"] += amnt
        //update balance

        // Transaction Data Store
        userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})
        console.log(userDetails);
        

        return userDetails[acnum]["balance"]
        //return current balance
      } 
      else {
        alert("Incoreect Password")
        return false
      }
    }
    else {
      alert('Incorrect Account Number')
      return false
    }
  }

  withdraw(acnum:any,password:any,amount:any) {
    let userDetails = this.userDetails
    var amnt = parseInt(amount)   //convert string to number

    if (acnum in userDetails) {
      if (password == userDetails[acnum]["password"]) {
        if(amnt < userDetails[acnum]["balance"]) {
          userDetails[acnum]["balance"] -= amnt

          userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})


          return userDetails[acnum]["balance"]
        //return current balance
        }
        else {
          alert ('Insufficient Blanace')
          return false
        }
      } 
      else {
        alert("Incoreect Password")
        return false
      }
    }
    else {
      alert('Incorrect Account Number')
      return false
    }
  }

  getTransaction(acno:any) {
    return this.userDetails[acno]["transaction"]
  }
}
