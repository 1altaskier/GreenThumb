import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPlanningBlogComponent } from './display-planning-blog.component';

describe('DisplayPlanningBlogComponent', () => {
  let component: DisplayPlanningBlogComponent;
  let fixture: ComponentFixture<DisplayPlanningBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayPlanningBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayPlanningBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
