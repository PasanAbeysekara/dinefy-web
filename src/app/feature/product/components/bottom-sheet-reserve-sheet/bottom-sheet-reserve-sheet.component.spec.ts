import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetReserveSheetComponent } from './bottom-sheet-reserve-sheet.component';

describe('BottomSheetReserveSheetComponent', () => {
  let component: BottomSheetReserveSheetComponent;
  let fixture: ComponentFixture<BottomSheetReserveSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomSheetReserveSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetReserveSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
