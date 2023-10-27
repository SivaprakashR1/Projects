import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){

  }
  user_records:any[]=[];
  data={
    name:"",
    roll:""
  }
  doLogin(values:any){
    this.user_records=JSON.parse(localStorage.getItem("users")||'{}');
    if(this.user_records.some((v)=>{
      return v.name == this.data.name && v.roll == this.data.roll
    })){
      alert("Login Successful");
      this.router.navigate(['/showuser']);
    }
    else{
      alert("Login Failed");
    }
  }
}
