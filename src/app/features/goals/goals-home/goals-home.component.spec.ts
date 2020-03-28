import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsHomeComponent } from './goals-home.component';

describe('GoalsHomeComponent', () => {
  let component: GoalsHomeComponent;
  let fixture: ComponentFixture<GoalsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
