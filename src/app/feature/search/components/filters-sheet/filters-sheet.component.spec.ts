import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersSheetComponent } from './filters-sheet.component';

describe('FilterSheetComponent', () => {
  let component: FiltersSheetComponent;
  let fixture: ComponentFixture<FiltersSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
