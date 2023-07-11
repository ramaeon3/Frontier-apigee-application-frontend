import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare const btoa: any;

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
      constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  loginForm: any = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)])
});

onSubmit(){
    if (this.loginForm.status === 'VALID'){
        console.log(this.loginForm.value);
        this.authenticate();
    }else{

    }
}

    isEyeClosed: boolean = true;
    defaultPass: string = 'password';
    visIconClicked() {
        this.isEyeClosed = !this.isEyeClosed;
        if (this.isEyeClosed) {
            this.renderer.setAttribute(document.getElementById('password-input'), 'type', 'password');
        } else {
            this.renderer.setAttribute(document.getElementById('password-input'), 'type', 'text');
        }
    }
    
authenticate(){
  localStorage.setItem('username',this.loginForm.value?.username);
  const username = this.loginForm.value?.username;
  const password = this.loginForm.value?.password;
  const token = btoa(username+password);  
  localStorage.setItem('token',token);
}
}
