import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffMainComponent } from './scaff-main.component';

describe('ScaffMainComponent', () => {
  let component: ScaffMainComponent;
  let fixture: ComponentFixture<ScaffMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaffMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
