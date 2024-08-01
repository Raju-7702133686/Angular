import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeTaskComponent } from './real-time-task.component';

describe('RealTimeTaskComponent', () => {
  let component: RealTimeTaskComponent;
  let fixture: ComponentFixture<RealTimeTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeTaskComponent]
    });
    fixture = TestBed.createComponent(RealTimeTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
