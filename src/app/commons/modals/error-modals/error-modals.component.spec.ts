import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModalsComponent } from './error-modals.component';

describe('ErrorModalsComponent', () => {
  let component: ErrorModalsComponent;
  let fixture: ComponentFixture<ErrorModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
