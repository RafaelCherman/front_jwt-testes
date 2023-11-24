import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentUser } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponentUser;
  let fixture: ComponentFixture<HeaderComponentUser>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentUser],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeaderComponentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
