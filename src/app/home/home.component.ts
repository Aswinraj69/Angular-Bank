import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  acno1=""
  pass1=""
  amnt1=""

  acno2="";
  pass2="";
  amnt2="";
 
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    
    let acno=this.acno1;
    let pass=this.pass1;
    let amnt=this.amnt1;
    let result = this.ds.deposit(acno,pass,amnt);

     if(result){
      alert(`${amnt} is added successfully. Balance id ${result}`)
     }else{
       alert("Something went wrong")
     }
  }

  withdraw(){
    let acno = this.acno2;
    let pass = this.pass2;
    let amnt = this.amnt2;
    let result = this.ds.withdraw(acno, pass, amnt);
    
    if(result){
      alert(`${amnt} have debited. Balance id ${result}`)
    }else{
      alert("Something went wrong")
    }
  }

}
