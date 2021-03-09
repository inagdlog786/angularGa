import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupNewpasswordComponent } from './setup-newpassword.component';

describe('SetupNewpasswordComponent', () => {
  let component: SetupNewpasswordComponent;
  let fixture: ComponentFixture<SetupNewpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupNewpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupNewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
