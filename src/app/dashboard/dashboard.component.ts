import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  courses: any[] = [];
  projects: any[] = [];
  skills: any[] = [];
  aboutMe:any[]=[];
  contactMe:any=[];

  contactMeForm:any={}
  aboutMeForm:any={}
  courseForm: any = {}; 
  projectForm: any = {}; 
  skillForm: any = {}; 


  selectedAboutMe:any=null
  selectedCourse: any = null;
  selectedProject: any = null;
  selectedSkill: any = null;
  selectedContactMe:any=null;
 
  constructor(private dashboardService: DashboardService,private _auth:AuthService,private route:Router) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadProjects();
    this.loadSkills();
    this.loadAboutMe();
    this.loadContactMe();
  }
  logOut(){
    this._auth.logout();
    this.route.navigate(['/login'])
   }



  resetForm(type: string): void {
    if (type === 'course') {
      this.courseForm = {};
    } else if (type === 'project') {
      this.projectForm = {};
    } else if (type === 'skill') {
      this.skillForm = {};
    }
    else if (type === 'aboutMe') {
      this.aboutMeForm = {};
    }
    else if (type === 'contactMe') {
      this.contactMeForm = {};
    }

  }


  clearEdit(type: string): void {
    if (type === 'course') {
      this.selectedCourse = null;
      this.resetForm('course');
    } else if (type === 'project') {
      this.selectedProject = null;
      this.resetForm('project');
    } else if (type === 'skill') {
      this.selectedSkill = null;
      this.resetForm('skill');
    }
    else if (type === 'aboutMe') {
      this.selectedAboutMe = null;
      this.resetForm('aboutMe');
    }
    else if (type === 'contactMe') {
      this.selectedContactMe = null;
      this.resetForm('contactMe');
    }
  }

  // Courses
  loadCourses(): void {
    this.dashboardService.getCourses().subscribe(data => {
      this.courses = data;
    });
  }

  addCourse(): void {
    this.dashboardService.addCourse(this.courseForm).subscribe(newCourse => {
      this.courses.push(newCourse);
      this.resetForm('course')
    });
  }

  deleteCourse(id: string): void {
    this.dashboardService.deleteCourse(id).subscribe(() => {
      this.loadCourses();
    });
  }

  setCourseForEdit(course: any): void {
    this.selectedCourse = { ...course }; 
    this.courseForm = { ...course }; 
  }
 

  editCourse(): void {
    if (this.selectedCourse) {
      this.dashboardService.editCourse(this.selectedCourse['_id'], this.courseForm).subscribe(() => {
        this.loadCourses();
        this.clearEdit('course'); 
      });
    }
  }

  
  // Projects
  loadProjects(): void {
    this.dashboardService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  addProject(): void {
    this.dashboardService.addProject(this.projectForm).subscribe(newProject => {
      this.projects.push(newProject);
      this.resetForm('project')
    });
  }

  setProjectForEdit(project: any): void {
    this.selectedProject = { ...project }; 
    this.projectForm = { ...project }; 
  }
 

  editProject(): void {
    if (this.selectedProject) {
      this.dashboardService.editProject(this.selectedProject['_id'], this.projectForm).subscribe(() => {
        this.loadProjects();
        this.clearEdit('project'); 
      });
    }
  }
  deleteProject(id: string): void {
    this.dashboardService.deleteProject(id).subscribe(() => {
      this.loadProjects();
    });
  }


  
  // AboutMe
  loadAboutMe(): void {
    this.dashboardService.getAboutMe().subscribe(data => {
      this.aboutMe = data;
    });
  }

  addAboutMe(): void {
    this.dashboardService.addAboutMe(this.aboutMeForm).subscribe(newAboutMe => {
      this.aboutMe.push(newAboutMe);
      this.resetForm('aboutMe');
    });
  }

  setAboutMeForEdit(aboutMe: any): void {
    this.selectedAboutMe = { ...aboutMe }; 
    this.aboutMeForm = { ...aboutMe }; 
  }
 

  editAboutMe(): void {
    if (this.selectedAboutMe) {
      this.dashboardService.editAboutMe(this.selectedAboutMe['_id'], this.aboutMeForm).subscribe(() => {
        this.loadAboutMe();
        this.clearEdit('aboutMe'); 
      });
    }
  }
  deleteAboutMe(id: string): void {
    this.dashboardService.deleteAboutMe(id).subscribe(() => {
      this.loadAboutMe();
    });
  }

  // Skills
  loadSkills(): void {
    this.dashboardService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  addSkill(): void {
    this.dashboardService.addSkill(this.skillForm).subscribe(newSkill => {
      this.skills.push(newSkill);
      this.resetForm('skill');
    });
  }


  setSkillForEdit(skill: any): void {
    this.selectedSkill = { ...skill }; 
    this.skillForm = { ...skill }; 
  }
 

  editSkill(): void {
    if (this.selectedSkill) {
      this.dashboardService.editSkill(this.selectedSkill['_id'], this.skillForm).subscribe(() => {
        this.loadSkills();
        this.clearEdit('skill'); 
      });
    }
  }
  deleteSkill(id: string): void {
    this.dashboardService.deleteSkill(id).subscribe(() => {
      this.loadSkills();
    });
  }



  
  // ContactMe
  loadContactMe(): void {
    this.dashboardService.getContactMe().subscribe(data => {
      this.contactMe = data;
    });
  }

  addContactMe(): void {
    this.dashboardService.addContactMe(this.contactMeForm).subscribe(newContactMe => {
      this.contactMe.push(newContactMe);
      this.resetForm('contactMe');
    });
  }

  setContactMeForEdit(contactMe: any): void {
    this.selectedContactMe = { ...contactMe }; 
    this.contactMeForm = { ...contactMe }; 
  }
 
  editContactMe(): void {
    if (this.selectedContactMe) {
      this.dashboardService.editContactMe(this.selectedContactMe['_id'], this.contactMeForm).subscribe(() => {
        this.loadContactMe();
        this.clearEdit('contactMe'); 
      });
    }
  }
  deleteContactMe(id: string): void {
    this.dashboardService.deleteContactMe(id).subscribe(() => {
      this.loadContactMe();
    });
  }

  
}
