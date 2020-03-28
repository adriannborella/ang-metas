import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsNavComponent } from './goals-nav.component';

describe('GoalsNavComponent', () => {
  let component: GoalsNavComponent;
  let fixture: ComponentFixture<GoalsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
