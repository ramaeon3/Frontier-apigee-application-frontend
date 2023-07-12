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

}
