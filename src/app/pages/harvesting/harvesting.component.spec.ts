import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestingComponent } from './harvesting.component';

describe('HarvestingComponent', () => {
  let component: HarvestingComponent;
  let fixture: ComponentFixture<HarvestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarvestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
