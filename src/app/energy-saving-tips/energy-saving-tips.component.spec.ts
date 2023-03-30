import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergySavingTipsComponent } from './energy-saving-tips.component';

describe('EnergySavingTipsComponent', () => {
  let component: EnergySavingTipsComponent;
  let fixture: ComponentFixture<EnergySavingTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergySavingTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergySavingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
