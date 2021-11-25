import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any={
    1000:{accno:1000,password:"123",uname:"Adarsh",balance:5000},
    1001 :{accno:1001,password:"123",uname:"Sree",balance:5000},
  }
  constructor() { }

  register(accno:any,uname:any,pswd:any){
    let db = this.data;
    if(accno in db){
      return false;
    }else{
      db[accno]={
        accno,
        password:pswd,
        uname:uname,
        balance:0
      }
      return true;
    }
  }

  login(acno:any,pswd:any){
    let db = this.data;
    if(acno in db){
      if(pswd==db[acno].password){
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
