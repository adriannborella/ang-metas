import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotAccountComponent } from './forgot-account.component';

describe('ForgotAccountComponent', () => {
  let component: ForgotAccountComponent;
  let fixture: ComponentFixture<ForgotAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
