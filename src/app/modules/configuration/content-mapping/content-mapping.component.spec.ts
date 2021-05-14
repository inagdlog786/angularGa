import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMappingComponent } from './content-mapping.component';

describe('ContentMappingComponent', () => {
  let component: ContentMappingComponent;
  let fixture: ComponentFixture<ContentMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
