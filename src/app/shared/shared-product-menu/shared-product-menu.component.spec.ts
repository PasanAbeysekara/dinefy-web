import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedProductMenuComponent } from './shared-product-menu.component';

describe('SharedProductMenuComponent', () => {
  let component: SharedProductMenuComponent;
  let fixture: ComponentFixture<SharedProductMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedProductMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProductMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
