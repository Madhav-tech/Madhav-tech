import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/UserService/user.service";
import { User } from "src/UserService/User";

@Component({
    selector:'create_user',
    templateUrl:'registerUser.component.html',
    styleUrls:['registerUser.component.css']
})

export class RegisterUser{
    
    user!: User ;
    id:any;
    sub:any;
    
    userForm = new FormGroup({
        userName: new FormControl('', [
                    Validators.required,
                    Validators.minLength(4)]),
         
        password: new FormControl('',[
                    Validators.required,
                    Validators.minLength(5),
                ]),
    
      });

    constructor(
        private router: Router,
        private userService: UserService
        ) { 
        }
    

    onSubmit(_form:any) {
        console.log('pwd',_form.value.password);
        let pswd:string = _form.value.password;
        if(_form.valid){
            if(pswd.match('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$')){
                console.log(_form);
                this.router.navigate(['/'])
            }
            else
                alert("Password must have at least one lowercase, \nOne uppercase character \nAnd one number");
    
        }
        else{
            alert("User Name And Password is required and\n length must be at least 5 characters")
        }
    }
}
