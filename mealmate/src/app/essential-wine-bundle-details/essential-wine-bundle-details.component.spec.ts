import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialWineBundleDetailsComponent } from './essential-wine-bundle-details.component';

describe('EssentialWineBundleDetailsComponent', () => {
  let component: EssentialWineBundleDetailsComponent;
  let fixture: ComponentFixture<EssentialWineBundleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialWineBundleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentialWineBundleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
