import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { SignupService } from 'src/app/services/core/signup.service';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']  
})
export class TargetDetailsComponent implements OnInit {

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

  constructor(private renderer: Renderer2, private signupService: SignupService) {}

  ngOnInit(): void {
    this.signupService.formData$.subscribe(formData => {
      if (formData) {
        this.personalDetails.patchValue(formData);
        console.log(this.personalDetails.value);        
      }
    });
    this.signupService.formDataPage2$.subscribe(formData => {
      if (formData) {
        this.sourceDetails.patchValue(formData);
        console.log(this.sourceDetails.value);        
      }
    });
  }
  personalDetails: any = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    cnfpassword: new FormControl('')        
});
sourceDetails: any = new FormGroup({
      sourceorg: new FormControl(''),
      sourceenv: new FormControl(''),
      sourceprotocol: new FormControl(''),
      sourcehostname: new FormControl(''),
      sourceport: new FormControl(''),
      sourcessl: new FormControl(''),
      sourcecrt: new FormControl(''),
      sourcekey: new FormControl(''),
      sourcepassword: new FormControl('')
});
  showFields: boolean = false;
  signupFormpage3: any = new FormGroup({
      targetorg: new FormControl('', [Validators.required, Validators.minLength(3)]),
      targetenv: new FormControl('', [Validators.required, Validators.minLength(3)]),
      targetprotocol: new FormControl('', [Validators.required, Validators.minLength(3)]),
      targethostname: new FormControl('', [Validators.required, this.urlValidator]),
      targetport: new FormControl('', [Validators.required, Validators.minLength(3), this.numberValidator]),
      targetssl: new FormControl(),
      targetcrt: new FormControl(''),
      targetkey: new FormControl(''),
      targetpassword: new FormControl(''),
  });

    urlValidator(control: FormControl) {
      const urlPattern = /^[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{2,}$/;      
      if (control.value && !urlPattern.test(control.value)) {
        return { invalidUrl: true };
      }      
      return null;
    }

    numberValidator(control: FormControl) {
      const numberPattern = /^\d+$/;      
      if (control.value && !numberPattern.test(control.value)) {
        return { invalidNumber: true };
      }
    
      return null;
    }
  targetpasswordthing: string = 'password';
  isEyeClosedTargetPassword: boolean = true;
  visIconClickedTargetPassword(){
      this.isEyeClosedTargetPassword = !this.isEyeClosedTargetPassword;
      if (this.isEyeClosedTargetPassword) {
          this.renderer.setAttribute(document.getElementById('password-input-target-pass'), 'type', 'password');
      } else {
          this.renderer.setAttribute(document.getElementById('password-input-target-pass'), 'type', 'text');
      }
  }

  createAccount(){
    if (this.signupFormpage3.status === 'VALID') {
      console.log(this.signupFormpage3.value);
  } else {}
  }

}
