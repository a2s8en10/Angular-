import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CourseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  courses: any[] = [];
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    const data = localStorage.getItem("Strings.STORAGE_KEY");
    console.log(data);
    if (data) {
      this.courses = JSON.parse(data);
    }
  }
}
