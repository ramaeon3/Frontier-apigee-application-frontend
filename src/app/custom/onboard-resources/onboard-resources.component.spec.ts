import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardResourcesComponent } from './onboard-resources.component';

describe('OnboardResourcesComponent', () => {
  let component: OnboardResourcesComponent;
  let fixture: ComponentFixture<OnboardResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
