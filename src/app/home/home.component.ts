import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
 
  depositForm=this.fb.group({
    
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amnt1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  })

  withdrawForm=this.fb.group({
    acno2:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pass2:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amnt2:['',[Validators.required,Validators.pattern('[0-9]*')]],
  })

  user=this.ds.currentUser

  constructor(private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    
    let acno=this.depositForm.value.acno1;
    let pass=this.depositForm.value.pass1;
    let amnt=this.depositForm.value.amnt1;

    if(this.depositForm.valid){
    let result = this.ds.deposit(acno,pass,amnt);

     if(result){
      alert(`${amnt} is added successfully. Balance is ${result}`)
     }else{
       alert("Something went wrong")
     }
    }else{
      alert('invalid form')
    }
  }

  withdraw(){
    let acno = this.withdrawForm.value.acno2;
    let pass = this.withdrawForm.value.pass2
    let amnt = this.withdrawForm.value.amnt2

  if(this.withdrawForm.valid){
    let result = this.ds.withdraw(acno, pass, amnt);
    
    if(result){
      alert(`${amnt} have debited. Balance is ${result}`)
    }else{
      alert("Something went wrong")
    }
  }else{
  alert('invalid form')
  }
}
}
