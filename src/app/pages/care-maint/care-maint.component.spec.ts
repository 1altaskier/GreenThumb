import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareMaintComponent } from './care-maint.component';

describe('CareMaintComponent', () => {
  let component: CareMaintComponent;
  let fixture: ComponentFixture<CareMaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareMaintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareMaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
