import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoPage } from './into.page';

describe('IntoPage', () => {
  let component: IntoPage;
  let fixture: ComponentFixture<IntoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
