import { ChangeDetectorRef, Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
    }
    passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    signupForm: any = new FormGroup({
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

    onSubmit() {
        if (this.signupForm.status === 'VALID') {
            console.log(this.signupForm.value);
        } else {

        }
    }

    hasUppercaseLetter(): boolean {
        const password = this.signupForm.controls.password.value;
        return /[A-Z]/.test(password);
    }

    hasLowercaseLetter(): boolean {
        const password = this.signupForm.controls.password.value;
        return /[a-z]/.test(password);
    }
    hasNumber(): boolean {
        const password = this.signupForm.controls.password.value;
        return /\d/.test(password);
    }
    hasSpecialCharacter(): boolean {
        const password = this.signupForm.controls.password.value;
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
}
