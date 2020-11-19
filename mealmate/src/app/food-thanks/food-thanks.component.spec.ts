import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodThanksComponent } from './food-thanks.component';

describe('FoodThanksComponent', () => {
  let component: FoodThanksComponent;
  let fixture: ComponentFixture<FoodThanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodThanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
