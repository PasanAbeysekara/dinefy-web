import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreFiltersModalComponent } from './more-filters-modal.component';

describe('MoreFiltersModalComponent', () => {
  let component: MoreFiltersModalComponent;
  let fixture: ComponentFixture<MoreFiltersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreFiltersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFiltersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
