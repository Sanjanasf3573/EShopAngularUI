import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialTagListComponent } from './special-tag-list.component';

describe('SpecialTagListComponent', () => {
  let component: SpecialTagListComponent;
  let fixture: ComponentFixture<SpecialTagListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialTagListComponent]
    });
    fixture = TestBed.createComponent(SpecialTagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
