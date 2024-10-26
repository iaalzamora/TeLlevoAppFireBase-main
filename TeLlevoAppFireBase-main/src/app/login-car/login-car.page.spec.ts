import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginCarPage } from './login-car.page';

describe('LoginCarPage', () => {
  let component: LoginCarPage;
  let fixture: ComponentFixture<LoginCarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
