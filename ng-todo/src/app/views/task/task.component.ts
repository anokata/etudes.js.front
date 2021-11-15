import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Priority } from 'src/app/model/priority';
import { Task } from 'src/app/model/task';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  public displayedColumns: string[] = [
    'color',
    'id',
    'title',
    'date',
    'priority',
    'category',
    'completion',
  ];
  public dataSource: MatTableDataSource<Task>;

  constructor(private dataHandler: DataHandlerService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe((tasks) => {
      this.tasks = tasks;
    });

    this.refreshTabel();
    console.trace();
  }

  refreshTabel() {
    this.dataSource.data = this.tasks;
  }

  public getPriorityColor(task: Task): string {
    if (task?.completed) return '#888';
    return task?.priority?.color || '#fff';
  }

  checkTask(task: Task) {
    task.completed = !task.completed;
  }
}
