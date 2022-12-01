import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchassignmentComponent } from './ng-switchassignment.component';

describe('NgSwitchassignmentComponent', () => {
  let component: NgSwitchassignmentComponent;
  let fixture: ComponentFixture<NgSwitchassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
