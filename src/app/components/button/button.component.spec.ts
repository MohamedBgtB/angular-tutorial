import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent2 } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent2;
  let fixture: ComponentFixture<ButtonComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent2]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
