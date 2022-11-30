import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPigComponent } from './add-pig.component';

describe('AddPigComponent', () => {
  let component: AddPigComponent;
  let fixture: ComponentFixture<AddPigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
