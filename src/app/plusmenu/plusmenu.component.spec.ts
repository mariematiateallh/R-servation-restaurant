import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusmenuComponent } from './plusmenu.component';

describe('PlusmenuComponent', () => {
  let component: PlusmenuComponent;
  let fixture: ComponentFixture<PlusmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlusmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlusmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
