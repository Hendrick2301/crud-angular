import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mode1Component } from './mode1.component';

describe('Mode1Component', () => {
  let component: Mode1Component;
  let fixture: ComponentFixture<Mode1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mode1Component]
    });
    fixture = TestBed.createComponent(Mode1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
