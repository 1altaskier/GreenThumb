import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlanningBlogComponent } from './delete-planning-blog.component';

describe('DeletePlanningBlogComponent', () => {
  let component: DeletePlanningBlogComponent;
  let fixture: ComponentFixture<DeletePlanningBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePlanningBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePlanningBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
