import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  // Courses
  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/courses`);
  }

  addCourse(course: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/courses`, course);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/courses/${id}`);
  }
  
  editCourse(id: string,courseData:any): Observable<any> {
    return this.http.put(`${this.baseUrl}/courses/${id}`,courseData);
  }

  // Projects
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/projects`);
  }

  addProject(project: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/projects`, project);
  }

  editProject(id: string,projectData:any): Observable<any> {
    return this.http.put(`${this.baseUrl}/projects/${id}`,projectData);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/projects/${id}`);
  }

  // Skills
  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/skills`);
  }

  addSkill(skill: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/skills`, skill);
  }

  editSkill(id: string,skillData:any): Observable<any> {
    return this.http.put(`${this.baseUrl}/skills/${id}`,skillData);
  }

  deleteSkill(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/skills/${id}`);
  }

//AboutMe
getAboutMe(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/AboutMe`);
}

addAboutMe(AboutMe: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/AboutMe`, AboutMe);
}

editAboutMe(id: string,AboutMeData:any): Observable<any> {
  return this.http.put(`${this.baseUrl}/AboutMe/${id}`,AboutMeData);
}

deleteAboutMe(id: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/AboutMe/${id}`);
}

//ContactMe
getContactMe(): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/ContactMe`);
}

addContactMe(ContactMe: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/ContactMe`, ContactMe);
}

editContactMe(id: string,ContactMeData:any): Observable<any> {
  return this.http.put(`${this.baseUrl}/ContactMe/${id}`,ContactMeData);
}

deleteContactMe(id: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/ContactMe/${id}`);
}


}