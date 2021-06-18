import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from "src/UserService/user.service";



@Component({
        selector:"login_form",
        templateUrl:"loginForm.component.html"
})

export class LoginForm{
    login:any = {
        username:'',
        password:''
    }
    isError:boolean=false;
    msg:string =''
    error:string = '';
    

    constructor(private router: Router,private userServices:UserService) { 
        this.userServices = userServices;
    }

    save(loginForm:NgForm){
         if(this.login.username == this.userServices.getUserName()){

            if(this.login.password == this.userServices.getPassword()){
                this.router.navigate(['employeelist']);
            }
            else{
                this.msg = 'Password'
                this.error = this.msg+' is incorrect';
                this.isError=true;
                console.error(this.error);
            }
        
        }
        else{
            this.msg = 'User Name';
            this.error = this.msg+' is incorrect';
            this.isError=true;
            console.error(this.error);
        }
    }

}