import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  aboutMe: any[] = []; 
  

  constructor(private dashboardService: DashboardService) { } 

  ngOnInit(): void {
    this.loadAboutMe(); 
  }
  loadAboutMe():void{
    this.dashboardService.getAboutMe().subscribe(data => {
      this.aboutMe = data;
    });
   }
}
