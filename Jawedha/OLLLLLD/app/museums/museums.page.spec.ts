import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumsPage } from './museums.page';

describe('MuseumsPage', () => {
  let component: MuseumsPage;
  let fixture: ComponentFixture<MuseumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuseumsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
