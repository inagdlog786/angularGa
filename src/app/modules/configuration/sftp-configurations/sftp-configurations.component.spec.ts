import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SftpConfigurationsComponent } from './sftp-configurations.component';

describe('SftpConfigurationsComponent', () => {
  let component: SftpConfigurationsComponent;
  let fixture: ComponentFixture<SftpConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SftpConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SftpConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
