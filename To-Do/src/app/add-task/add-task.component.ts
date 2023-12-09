import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ITask } from '../task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  
  constructor(private formBuilder: FormBuilder) { }

  form =this.formBuilder.group({
    text: [''],
    deadline: [''],
    isCompleted: [false],
    isImportant: [false]
  });

  @Output() createEvent = new EventEmitter<ITask>();

  onSubmit(): void {
    if (!this.form.valid) {
      alert("Invalid data!");
      return;
    }

    const task = this.form.value as ITask;

    this.createEvent.emit(task);
  }
}
