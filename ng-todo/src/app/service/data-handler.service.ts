import { Injectable } from '@angular/core';
import { TestData } from '../data/testData';
import { Category } from '../model/category';
import { Priority } from '../model/priority';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  getPriorities(): Priority[] {
    return TestData.priorities;
  }
}
