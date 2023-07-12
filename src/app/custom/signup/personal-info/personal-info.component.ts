import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { SignupService } from 'src/app/services/core/signup.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']  
})
export class PersonalInfoComponent implements OnInit {

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

    constructor(private renderer: Renderer2, private router: Router, private signupService: SignupService) {}

    ngOnInit(): void {
    }
    passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    signupFormpage1: any = new FormGroup({
        firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastname: new FormControl('', [Validators.required, Validators.minLength(1)]),
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordRegex)]),
        cnfpassword: new FormControl('', [Validators.required, Validators.minLength(8)])        
    },{validators: [this.passwordMatchValidator.bind(this)]});

    passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const password = control.get('password');
        const cnfpassword = control.get('cnfpassword');
        if (password && cnfpassword && password.value !== cnfpassword.value) {
            cnfpassword.setErrors({ passwordMismatch: true });
        }else {
            cnfpassword.setErrors(null);
        }
        return null;
      }
    

    hasUppercaseLetter(): boolean {
        const password = this.signupFormpage1.controls.password.value;
        return /[A-Z]/.test(password);
    }

    hasLowercaseLetter(): boolean {
        const password = this.signupFormpage1.controls.password.value;
        return /[a-z]/.test(password);
    }
    hasNumber(): boolean {
        const password = this.signupFormpage1.controls.password.value;
        return /\d/.test(password);
    }
    hasSpecialCharacter(): boolean {
        const password = this.signupFormpage1.controls.password.value;
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
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

    cnfPasswordthing: string = 'password';
    isEyeClosedCnf: boolean = true;
    visIconClickedCnf(){
        this.isEyeClosedCnf = !this.isEyeClosedCnf;
        if (this.isEyeClosedCnf) {
            this.renderer.setAttribute(document.getElementById('password-input-cnf'), 'type', 'password');
        } else {
            this.renderer.setAttribute(document.getElementById('password-input-cnf'), 'type', 'text');
        }
    }
    continueBtn(event: any){        
        if (this.signupFormpage1.status === 'VALID') {
            console.log(this.signupFormpage1.value);
            const formData = this.signupFormpage1.value;
            this.signupService.updateFormData(formData);
            this.router.navigate(['/signup/source-details']);
        } else {

        }
        
    }

}



