import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistrationFormComponent } from './create-registration-form.component';

describe('CreateRegistrationFormComponent', () => {
  let component: CreateRegistrationFormComponent;
  let fixture: ComponentFixture<CreateRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
