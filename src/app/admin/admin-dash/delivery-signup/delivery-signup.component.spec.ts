import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySignupComponent } from './delivery-signup.component';

describe('DeliverySignupComponent', () => {
  let component: DeliverySignupComponent;
  let fixture: ComponentFixture<DeliverySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
