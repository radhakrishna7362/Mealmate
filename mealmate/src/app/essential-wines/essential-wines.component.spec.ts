import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialWinesComponent } from './essential-wines.component';

describe('EssentialWinesComponent', () => {
  let component: EssentialWinesComponent;
  let fixture: ComponentFixture<EssentialWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
