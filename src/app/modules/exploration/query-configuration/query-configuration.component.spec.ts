import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryConfigurationComponent } from './query-configuration.component';

describe('QueryConfigurationComponent', () => {
  let component: QueryConfigurationComponent;
  let fixture: ComponentFixture<QueryConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
