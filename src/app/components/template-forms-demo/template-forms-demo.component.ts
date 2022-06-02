import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lms-template-forms-demo',
  templateUrl: './template-forms-demo.component.html',
  styleUrls: ['./template-forms-demo.component.css'],
})
export class TemplateFormsDemoComponent {
  technologies: string[] = ['Angular', 'React', 'Vue', 'Java', 'C#', 'Python'];

  course: string = '';
  technology: string = '';
  duration: number = 1;
  description: string = '';

  onSubmit() {
    console.log(this.course, this.technology, this.duration, this.description);
  }
}
