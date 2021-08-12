import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullModalsComponent } from './successfull-modals.component';

describe('SuccessfullModalsComponent', () => {
  let component: SuccessfullModalsComponent;
  let fixture: ComponentFixture<SuccessfullModalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullModalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
