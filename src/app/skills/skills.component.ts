import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] 
})
export class SkillsComponent implements OnInit {

  skills: any[] = []; 
  technicalSkills: any[] = [];
  softSkills: any[] = [];

  constructor(private dashboardService: DashboardService) { } 

  ngOnInit(): void {
    this.loadSkills(); 
  }


 loadSkills():void{
  this.dashboardService.getSkills().subscribe(data => {
    this.skills = data;
    this.technicalSkills = this.skills.filter(skill => skill.type === 'Technical');
    this.softSkills = this.skills.filter(skill => skill.type === 'Soft');
  });
 }
}
