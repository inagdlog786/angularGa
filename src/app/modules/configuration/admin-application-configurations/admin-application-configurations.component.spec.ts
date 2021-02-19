import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApplicationConfigurationsComponent } from './admin-application-configurations.component';

describe('AdminApplicationConfigurationsComponent', () => {
  let component: AdminApplicationConfigurationsComponent;
  let fixture: ComponentFixture<AdminApplicationConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApplicationConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminApplicationConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
