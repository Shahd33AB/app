import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectChildComponent } from './project-child.component';

describe('ProjectChildComponent', () => {
  let component: ProjectChildComponent;
  let fixture: ComponentFixture<ProjectChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
