import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailerPage } from './trailer.page';

describe('TrailerPage', () => {
  let component: TrailerPage;
  let fixture: ComponentFixture<TrailerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrailerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
