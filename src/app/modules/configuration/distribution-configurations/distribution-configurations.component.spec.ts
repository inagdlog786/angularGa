import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionConfigurationsComponent } from './distribution-configurations.component';

describe('DistributionConfigurationsComponent', () => {
  let component: DistributionConfigurationsComponent;
  let fixture: ComponentFixture<DistributionConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistributionConfigurationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
