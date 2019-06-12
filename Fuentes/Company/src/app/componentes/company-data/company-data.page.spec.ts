import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDataPage } from './company-data.page';

describe('CompanyDataPage', () => {
  let component: CompanyDataPage;
  let fixture: ComponentFixture<CompanyDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
