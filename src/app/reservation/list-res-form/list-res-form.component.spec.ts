import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResFormComponent } from './list-res-form.component';

describe('ListResFormComponent', () => {
  let component: ListResFormComponent;
  let fixture: ComponentFixture<ListResFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListResFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
