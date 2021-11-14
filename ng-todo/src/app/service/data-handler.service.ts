import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TestData } from '../data/testData';
import { Category } from '../model/category';
import { Priority } from '../model/priority';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  taskSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(
    TestData.tasks
  );

  categorySubject: BehaviorSubject<Category[]> = new BehaviorSubject<
    Category[]
  >(TestData.categories);

  constructor() {}

  fillCategories(): void {
    this.categorySubject.next(TestData.categories);
  }

  fillTasksByCategory(category: Category): void {
    this.taskSubject.next(
      TestData.tasks.filter((task) => task.category === category)
    );
  }

  fillTasks(): void {
    this.taskSubject.next(TestData.tasks);
  }

  getPriorities(): Priority[] {
    return TestData.priorities;
  }
}
