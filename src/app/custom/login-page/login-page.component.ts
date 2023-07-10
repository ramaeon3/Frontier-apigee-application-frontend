import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    focusedField: string | null = null;
    isFocused(field: string): boolean {
        return this.focusedField === field;
      }

      onFocus(field: string) {
        this.focusedField = field;
      }

      onBlur(field: string) {
        this.focusedField = null;
      }
  constructor() { }

  ngOnInit(): void {
  }

  loginForm: any = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)])
});

onSubmit(){
    if (this.loginForm.status === 'VALID'){
        console.log(this.loginForm.value);
    }else{

    }
}

get f() {
    return this.loginForm.controls;
}

}
