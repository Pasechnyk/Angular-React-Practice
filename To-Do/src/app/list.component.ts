import { Component } from "@angular/core";
import { ITask, TASKS } from "./task";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class TaskComponent {
    task: ITask[] = TASKS;
}