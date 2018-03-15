import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3PracticingDirectivesComponent } from './assignment-3-practicing-directives.component';

describe('Assignment3PracticingDirectivesComponent', () => {
  let component: Assignment3PracticingDirectivesComponent;
  let fixture: ComponentFixture<Assignment3PracticingDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment3PracticingDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment3PracticingDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
