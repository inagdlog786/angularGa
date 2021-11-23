import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCatalogueHomeComponent } from './api-catalogue-home.component';

describe('ApiCatalogueHomeComponent', () => {
  let component: ApiCatalogueHomeComponent;
  let fixture: ComponentFixture<ApiCatalogueHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiCatalogueHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCatalogueHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
