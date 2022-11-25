import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigsComponent } from './pigs.component';

describe('PigsComponent', () => {
  let component: PigsComponent;
  let fixture: ComponentFixture<PigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
