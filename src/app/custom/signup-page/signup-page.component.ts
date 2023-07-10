import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['../login-page/login-page.component.scss']
})
export class SignupPageComponent implements OnInit {
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
  signupForm: any = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
    username : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),
    cnfpassword : new FormControl('', [Validators.required, Validators.minLength(5)])
});

onSubmit(){
    if (this.signupForm.status === 'VALID'){
        
    }else{

    }
}

get f() {
    return this.signupForm.controls;
}


}
