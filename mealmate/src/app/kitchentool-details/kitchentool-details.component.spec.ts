import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchentoolDetailsComponent } from './kitchentool-details.component';

describe('KitchentoolDetailsComponent', () => {
  let component: KitchentoolDetailsComponent;
  let fixture: ComponentFixture<KitchentoolDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitchentoolDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchentoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
