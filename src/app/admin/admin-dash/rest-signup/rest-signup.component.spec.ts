import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSignupComponent } from './rest-signup.component';

describe('RestSignupComponent', () => {
  let component: RestSignupComponent;
  let fixture: ComponentFixture<RestSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
