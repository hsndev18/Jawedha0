import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesPage } from './families.page';

describe('FamiliesPage', () => {
  let component: FamiliesPage;
  let fixture: ComponentFixture<FamiliesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
