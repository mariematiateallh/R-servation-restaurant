import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResFormComponent } from './edit-res-form.component';

describe('EditResFormComponent', () => {
  let component: EditResFormComponent;
  let fixture: ComponentFixture<EditResFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditResFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
