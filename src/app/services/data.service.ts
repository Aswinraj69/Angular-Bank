import { style } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""

  currentAcno=""

  data:any={
    1000:{accno:1000,password:"123",uname:"Aswin",balance:5000,transaction:[]},
    1001 :{accno:1001,password:"123",uname:"popz",balance:5000,transaction:[]},
  }
  constructor() { 
     this.getDetails()
  }

  getTransaction(acno:any) {
    return this.data[acno]["transaction"]
  }

  saveDetails(){
    if(this.data){
      localStorage.setItem("data",JSON.stringify(this.data))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
   if(this.currentAcno){
     localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
   }
  }

  getDetails() {
    if(localStorage.getItem("data")){
      this.data = JSON.parse(localStorage.getItem("data") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || "")
    }
  }

  register(accno:any,uname:any,pswd:any){
    let db = this.data;
    if(accno in db){
      return false;
    }else{
      db[accno]={
        accno,
        password:pswd,
        uname:uname,
        balance:0,
        transaction:[]
      }
      this.saveDetails()
      return true;
    }
  }

  login(acno:any,pswd:any){
    let db = this.data;
    if(acno in db){
      if(pswd==db[acno].password){
        this.currentUser = db[acno].uname;
        this.currentAcno = acno; 
        this.saveDetails()
        return true;
      }else{
        alert("login failed")
        return false;
      }
    }
    else{
      alert("User doesn't exist");
      return false;

    }
  }

  deposit(acno:any,pass:any,amnt:any){
    let db = this.data;
    let amount = parseInt(amnt)
    if(acno in db){
      if(db[acno].password==pass){
        db[acno].balance+=amount
        db[acno]["transaction"].push({
          amount:amount,
          type:"CREDIT"
        
        })
        this.saveDetails()
        return db[acno].balance
      }else{
        alert("Invalid password");
        return false;
      }
    }else{
      alert("user not found")
      return false;
    }
  }

  withdraw(acno:any,pass:any,amnt:any){
    let db = this.data;
    let amount = parseInt(amnt)
    if(acno in db){
      if(db[acno].password==pass){
        if(amount<db[acno].balance){
          db[acno].balance-=amount
          db[acno]["transaction"].push({
            amount:amount,
            type:"DEBIT"
          })
          this.saveDetails()
          return db[acno].balance
        }else{
          alert("Insufficent balance");
          return false;
        }
        
      }else{
        alert("Invalid password");
        return false;
      }
    }else{
      alert("user not found")
      return false;
    }
  }
}
