import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerMainDashboardComponent } from './consumer-main-dashboard.component';

describe('ConsumerMainDashboardComponent', () => {
  let component: ConsumerMainDashboardComponent;
  let fixture: ComponentFixture<ConsumerMainDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerMainDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerMainDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
