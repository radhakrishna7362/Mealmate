import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallWineBundleDetailsComponent } from './fall-wine-bundle-details.component';

describe('FallWineBundleDetailsComponent', () => {
  let component: FallWineBundleDetailsComponent;
  let fixture: ComponentFixture<FallWineBundleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallWineBundleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallWineBundleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
