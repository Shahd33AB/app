import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-child',
  templateUrl: './course-child.component.html',
  styleUrl: './course-child.component.css'
})
export class CourseChildComponent {
  @Input() course: any;

  getIconClass(category: string): string {
    switch (category) {
      case 'Web Programming':
        return 'fas fa-code icon-programming';
      case 'Mobile Programming':
        return 'fas fa-mobile-alt icon-mobile';
      // case 'Internship':
      //   return 'fas fa-briefcase icon-internship';
      case 'Machine Learning':
        return 'fas fa-brain icon-machinelearning';
        case 'Hackathon':
          return 'fas fa-trophy icon-hackathon';
      default:
        return 'fas fa-book icon-general'; 
    }
  }

}
