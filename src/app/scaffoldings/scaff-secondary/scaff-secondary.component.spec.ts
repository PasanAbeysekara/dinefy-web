import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffSecondaryComponent } from './scaff-secondary.component';

describe('ScaffSecondaryComponent', () => {
  let component: ScaffSecondaryComponent;
  let fixture: ComponentFixture<ScaffSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaffSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
