import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}
