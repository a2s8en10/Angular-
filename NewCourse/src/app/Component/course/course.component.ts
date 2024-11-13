import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  @Input() course: any;

  // delete operation
  @Input() isDelete = false;
  @Output() del = new EventEmitter();

  deleteCourse(){
    this.del.emit(this.course);
  }
}
