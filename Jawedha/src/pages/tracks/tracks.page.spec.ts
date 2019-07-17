import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksPage } from './tracks.page';

describe('TracksPage', () => {
  let component: TracksPage;
  let fixture: ComponentFixture<TracksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
