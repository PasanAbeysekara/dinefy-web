import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRestaurentsComponent } from './fav-restaurents.component';

describe('FavRestaurentsComponent', () => {
  let component: FavRestaurentsComponent;
  let fixture: ComponentFixture<FavRestaurentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavRestaurentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRestaurentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
