import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialTagNameComponent } from './add-special-tag-name.component';

describe('AddSpecialTagNameComponent', () => {
  let component: AddSpecialTagNameComponent;
  let fixture: ComponentFixture<AddSpecialTagNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSpecialTagNameComponent]
    });
    fixture = TestBed.createComponent(AddSpecialTagNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
