import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCategoryAddEditComponent } from './contact-category-add-edit.component';

describe('ContactCategoryAddEditComponent', () => {
  let component: ContactCategoryAddEditComponent;
  let fixture: ComponentFixture<ContactCategoryAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCategoryAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCategoryAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
