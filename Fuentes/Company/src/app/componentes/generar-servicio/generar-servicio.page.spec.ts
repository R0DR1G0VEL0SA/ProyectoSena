import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarServicioPage } from './generar-servicio.page';

describe('GenerarServicioPage', () => {
  let component: GenerarServicioPage;
  let fixture: ComponentFixture<GenerarServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarServicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
