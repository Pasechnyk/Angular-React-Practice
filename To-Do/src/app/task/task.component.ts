import { Component, Input } from '@angular/core';
import { TaskService } from '../tasks.service';
import { ITask } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private tasksService: TaskService) {}

  @Input()
  task: ITask = {
    id: 0,
    title: "",
    isCompleted: false,
    isImportant: false,
    deadline: ""
  }

  completeTask(event: Event, task: ITask): void {
    const target = event.target as HTMLImageElement;

    if (task.isCompleted) {
      task.isCompleted = false;
      target.parentElement?.classList.remove("Completed!");
    }
    else {
      task.isCompleted = true;
      target.parentElement?.classList.add("Completed!");
    }
  }

  deleteTask(id: number) {
    this.tasksService.deleteTask(id);
  }

}
