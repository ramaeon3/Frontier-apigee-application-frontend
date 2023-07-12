import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private formDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  get formData$() {
    return this.formDataSubject.asObservable();
  }

  updateFormData(formData: any) {
    this.formDataSubject.next(formData);
  }

  private formDataSubjectPage2: BehaviorSubject<any> = new BehaviorSubject<any>({});

  get formDataPage2$() {
    return this.formDataSubjectPage2.asObservable();
  }

  updateFormDataPage2(formDataPage2: any) {
    this.formDataSubjectPage2.next(formDataPage2);
  }
}
