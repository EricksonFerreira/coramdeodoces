import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BredCrumbComponent } from './bred-crumb.component';

describe('BredCrumbComponent', () => {
  let component: BredCrumbComponent;
  let fixture: ComponentFixture<BredCrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BredCrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BredCrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
