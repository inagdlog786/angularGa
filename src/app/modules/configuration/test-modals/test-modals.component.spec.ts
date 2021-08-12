import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestModalsComponent } from './test-modals.component';

describe('TestModalsComponent', () => {
  let component: TestModalsComponent;
  let fixture: ComponentFixture<TestModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
