import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRiderFormComponent } from './register-rider-form.component';

describe('RegisterRiderFormComponent', () => {
  let component: RegisterRiderFormComponent;
  let fixture: ComponentFixture<RegisterRiderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterRiderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRiderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
