import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  
  loginform:any;

  constructor(private formbuilder:FormBuilder)
  {

  }

  ngOnInit()
  {
    this.loginform=this.formbuilder.group({

      email:this.formbuilder.control(''),
      password:this.formbuilder.control(''),
      isChecked:this.formbuilder.control(false)
    })
  }

  login(){
    console.log(this.loginform.value)
    if(this.loginform.value.email=="admin@gmail.com" && this.loginform.value.password=="admin@123")
    {
      localStorage.setItem("admin","true")
    }
   
    localStorage.setItem("email",this.loginform.value.email)
    
    
  }
 
}
