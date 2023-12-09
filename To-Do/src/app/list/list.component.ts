import { Component } from "@angular/core";
import { ITask, TASKS } from "../task";
import { TaskService } from '../tasks.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    tasks: ITask[] = TASKS;

    constructor(private tasksService: TaskService) {
      this.tasks = tasksService.getTasks();
    }

    addTask(task: ITask): void {
      this.tasksService.addTask(task);
      this.tasks = this.tasksService.getTasks();
    }
}
