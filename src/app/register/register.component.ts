import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullname=""
  accno=""
  pswd=""

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

    register(){
     
      
      let uname = this.registerForm.value.uname;
      let accno = this.registerForm.value.accno;
      let pswd = this.registerForm.value.pswd;
       
      if(this.registerForm.valid){
        let result = this.ds.register(accno,uname,pswd);
      if(result){
        alert("Account created successfully. Please log in !!!!");
        this.router.navigateByUrl("");
      }
      else{
        alert("Account already exists. Try again")
      }
      }else{
        alert("Form invalid")
      }

      
    }
}
