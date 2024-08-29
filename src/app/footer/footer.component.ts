import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  contactMe: any[] = []; 
  

  constructor(private dashboardService: DashboardService) { } 

  ngOnInit(): void {
    this.loadContactMe(); 
  }


 loadContactMe():void{
  this.dashboardService.getContactMe().subscribe(data => {
    this.contactMe = data;
  });
 }
 

}
