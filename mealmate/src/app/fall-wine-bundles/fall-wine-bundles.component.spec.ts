import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallWineBundlesComponent } from './fall-wine-bundles.component';

describe('FallWineBundlesComponent', () => {
  let component: FallWineBundlesComponent;
  let fixture: ComponentFixture<FallWineBundlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallWineBundlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallWineBundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
