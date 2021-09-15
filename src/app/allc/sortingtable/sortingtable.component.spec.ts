import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingtableComponent } from './sortingtable.component';

describe('SortingtableComponent', () => {
  let component: SortingtableComponent;
  let fixture: ComponentFixture<SortingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
