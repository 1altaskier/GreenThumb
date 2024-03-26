import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantingComponent } from './planting.component';

describe('PlantingComponent', () => {
  let component: PlantingComponent;
  let fixture: ComponentFixture<PlantingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
