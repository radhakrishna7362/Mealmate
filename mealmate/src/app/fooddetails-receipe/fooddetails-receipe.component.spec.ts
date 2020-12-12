import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddetailsReceipeComponent } from './fooddetails-receipe.component';

describe('FooddetailsReceipeComponent', () => {
  let component: FooddetailsReceipeComponent;
  let fixture: ComponentFixture<FooddetailsReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooddetailsReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooddetailsReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
