import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanningBlogComponent } from './add-planning-blog.component';

describe('AddPlanningBlogComponent', () => {
  let component: AddPlanningBlogComponent;
  let fixture: ComponentFixture<AddPlanningBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlanningBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPlanningBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
