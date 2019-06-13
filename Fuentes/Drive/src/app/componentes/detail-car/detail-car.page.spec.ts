import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCarPage } from './detail-car.page';

describe('DetailCarPage', () => {
  let component: DetailCarPage;
  let fixture: ComponentFixture<DetailCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
