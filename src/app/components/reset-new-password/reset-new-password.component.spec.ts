import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetNewPasswordComponent } from './reset-new-password.component';

describe('ResetNewPasswordComponent', () => {
  let component: ResetNewPasswordComponent;
  let fixture: ComponentFixture<ResetNewPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetNewPasswordComponent]
    });
    fixture = TestBed.createComponent(ResetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
