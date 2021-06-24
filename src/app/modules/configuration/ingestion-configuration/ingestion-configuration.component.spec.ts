import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngestionConfigurationComponent } from './ingestion-configuration.component';

describe('IngestionConfigurationComponent', () => {
  let component: IngestionConfigurationComponent;
  let fixture: ComponentFixture<IngestionConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngestionConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngestionConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
