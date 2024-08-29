import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit {

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
