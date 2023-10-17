import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname:any;
  lastname:any;
  email:any;
  password:any;
  confirmpassword:any;

  registerform:any;
  
  constructor(private formbuilder:FormBuilder)
  {
     
  }

  ngOnInit()
  {
     this.registerform = this.formbuilder.group({
      firstname:this.formbuilder.control(''),
      lastname:this.formbuilder.control(''),
      email:this.formbuilder.control(''),
      password:this.formbuilder.control(''),
      confirmpassword:this.formbuilder.control('')
     })
    
  }

  register()
  {
    console.log(this.registerform);
  }
}
