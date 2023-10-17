import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecialTagNameComponent } from './edit-special-tag-name.component';

describe('EditSpecialTagNameComponent', () => {
  let component: EditSpecialTagNameComponent;
  let fixture: ComponentFixture<EditSpecialTagNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSpecialTagNameComponent]
    });
    fixture = TestBed.createComponent(EditSpecialTagNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
