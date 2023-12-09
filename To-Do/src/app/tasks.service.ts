import { Injectable } from '@angular/core';
import { ITask, TASKS } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: ITask[] = TASKS;

  constructor() { }

  getTasks(): ITask[] {
    return [...this.tasks];
  }

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks.splice(id, 1);
    console.log(this.tasks);
  }
}
