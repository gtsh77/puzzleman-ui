import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderVerifyComponent } from './reminder-verify.component';

describe('ReminderVerifyComponent', () => {
  let component: ReminderVerifyComponent;
  let fixture: ComponentFixture<ReminderVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReminderVerifyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReminderVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
