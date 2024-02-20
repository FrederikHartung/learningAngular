import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialdayComponent } from './specialday.component';

describe('SpecialdayComponent', () => {
  let component: SpecialdayComponent;
  let fixture: ComponentFixture<SpecialdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialdayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
