import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDashComponent } from './rest-dash.component';

describe('RestDashComponent', () => {
  let component: RestDashComponent;
  let fixture: ComponentFixture<RestDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
