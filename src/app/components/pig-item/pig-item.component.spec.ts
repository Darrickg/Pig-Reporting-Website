import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigItemComponent } from './pig-item.component';

describe('PigItemComponent', () => {
  let component: PigItemComponent;
  let fixture: ComponentFixture<PigItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
