import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-child',
  templateUrl: './project-child.component.html',
  styleUrl: './project-child.component.css'
})
export class ProjectChildComponent {
  @Input() project: any;
}
