// import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseComponent } from "../course/course.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CourseComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  model: any = {};
  cover!: string | null;
  cover_file: any;
  showError = false;
  courses: any[] = [];

  ngOnInit(){
    this.getCourses();
  }

  getCourses(){
    const data = localStorage.getItem("Strings.STORAGE_KEY");
    console.log(data);
    if (data){
      this.courses = JSON.parse(data);
    }
  }
  OnFileSelected(event: any) {
    console.log(event);
    const file = event.target.files[0];
    if (file) {
      this.cover_file = file;
      const reader = new FileReader();
      console.log(reader);
      reader.onload = () => {
        const dataUrl = reader.result!.toString();
        this.cover = dataUrl;
        console.log('image: ', this.cover);
      };
      reader.readAsDataURL(file);
      this.showError = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid || !this.cover) {
      console.log("form are invalid");
      form.control.markAllAsTouched();
      if (!this.cover) {
        this.showError = true;
      }
    }
    console.log(form.value);
    this.saveCourse(form);
  }
  clearForm(form : NgForm){
    form.reset();
    this.cover = null;
    this.cover_file = null;
  }
  saveCourse(form: NgForm) {
    const formValue = form.value;
    console.log(formValue);
    const data = {
      ...formValue,
      image: this.cover,
      id : this.courses.length + 1,
    };
    this.courses = [...this.courses, data];
    this.setItem(this.courses);

    this.clearForm(form);

  }

  deleteCourse(course : any){
    this.courses = this.courses.filter(course_item => course_item.id != course.id);
    this.setItem(this.courses);

  }

  setItem(data : any) {
    localStorage.setItem("Strings.STORAGE_KEY", JSON.stringify(data));
  }
}
