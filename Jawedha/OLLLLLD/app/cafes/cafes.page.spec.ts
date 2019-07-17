import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafesPage } from './cafes.page';

describe('CafesPage', () => {
  let component: CafesPage;
  let fixture: ComponentFixture<CafesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
