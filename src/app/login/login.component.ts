import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  value = "Account number ... "
  accno = "";
  pswd="";
  

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  

  login(){
    let acno = this.accno;
    let pswd = this.pswd;
    let result = this.ds.login(acno,pswd);
    
    if(result){
      alert("logged in succesfully!!!!")
      this.router.navigateByUrl('home');
    }else{
      this.router.navigateByUrl("");
    }
  }
}
