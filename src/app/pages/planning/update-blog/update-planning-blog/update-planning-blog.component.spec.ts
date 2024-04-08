import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlanningBlogComponent } from './update-planning-blog.component';

describe('UpdatePlanningBlogComponent', () => {
  let component: UpdatePlanningBlogComponent;
  let fixture: ComponentFixture<UpdatePlanningBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePlanningBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePlanningBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
