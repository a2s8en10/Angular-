import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  @Input() courses: any;
  // delete operation
  @Input() isAdmin = false;
  @Output() del = new EventEmitter();

  deleteCourse(course:any){       // single course select
    this.del.emit(course);
  }
}
