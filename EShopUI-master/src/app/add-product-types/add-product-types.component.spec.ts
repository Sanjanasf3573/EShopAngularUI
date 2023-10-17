import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTypesComponent } from './add-product-types.component';

describe('AddProductTypesComponent', () => {
  let component: AddProductTypesComponent;
  let fixture: ComponentFixture<AddProductTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductTypesComponent]
    });
    fixture = TestBed.createComponent(AddProductTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
