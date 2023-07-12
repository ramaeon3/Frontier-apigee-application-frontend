import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs/operators';
import { SignupService } from 'src/app/services/core/signup.service';

@Component({
  selector: 'app-source-details',
  templateUrl: './source-details.component.html',
  styleUrls: ['./source-details.component.scss']
})
export class SourceDetailsComponent implements OnInit {

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

  constructor(private renderer: Renderer2, private router: Router,private signupService: SignupService) {}

  ngOnInit(): void {
    this.signupService.formData$.subscribe(formData => {
      if (formData) {
        this.signupFormpage2.patchValue(formData);
      }
    });
  }
  showFields: boolean = false;
  signupFormpage2: any = new FormGroup({      
      sourceorg: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sourceenv: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sourceprotocol: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sourcehostname: new FormControl('', [Validators.required, this.urlValidator]),
      sourceport: new FormControl('', [Validators.required, Validators.minLength(3), this.numberValidator]),
      sourcessl: new FormControl(),
      sourcecrt: new FormControl(''),
      sourcekey: new FormControl(''),
      sourcepassword: new FormControl('')      
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


  sourcepasswordthing: string = 'password';
  isEyeClosedSourcePassword: boolean = true;
  visIconClickedSourcePassword(){
      this.isEyeClosedSourcePassword = !this.isEyeClosedSourcePassword;
      if (this.isEyeClosedSourcePassword) {
          this.renderer.setAttribute(document.getElementById('password-input-source-pass'), 'type', 'password');
      } else {
          this.renderer.setAttribute(document.getElementById('password-input-source-pass'), 'type', 'text');
      }
  }
  continueBtn(event: any){        
    if (this.signupFormpage2.status === 'VALID') {
        console.log(this.signupFormpage2.value);
        const formData = this.signupFormpage2.value;
        this.signupService.updateFormData(formData);
        this.router.navigate(['/signup/target-details']);
    } else {
    }
  }
}
