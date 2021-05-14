import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewplanComponent } from './create-newplan.component';

describe('CreateNewplanComponent', () => {
  let component: CreateNewplanComponent;
  let fixture: ComponentFixture<CreateNewplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
