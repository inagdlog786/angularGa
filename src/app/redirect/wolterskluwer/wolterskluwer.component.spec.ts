import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WolterskluwerComponent } from './wolterskluwer.component';

describe('WolterskluwerComponent', () => {
  let component: WolterskluwerComponent;
  let fixture: ComponentFixture<WolterskluwerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WolterskluwerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WolterskluwerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
