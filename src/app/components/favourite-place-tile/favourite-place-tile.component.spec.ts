import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritePlaceTileComponent } from './favourite-place-tile.component';

describe('FavouritePlaceTileComponent', () => {
  let component: FavouritePlaceTileComponent;
  let fixture: ComponentFixture<FavouritePlaceTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritePlaceTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritePlaceTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
