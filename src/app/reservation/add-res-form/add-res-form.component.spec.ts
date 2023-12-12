import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResFormComponent } from './add-res-form.component';

describe('AddResFormComponent', () => {
  let component: AddResFormComponent;
  let fixture: ComponentFixture<AddResFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddResFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddResFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
