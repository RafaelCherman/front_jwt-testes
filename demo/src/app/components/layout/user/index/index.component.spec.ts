import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentUser } from './index.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IndexComponent', () => {
  let component: IndexComponentUser;
  let fixture: ComponentFixture<IndexComponentUser>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponentUser],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(IndexComponentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
