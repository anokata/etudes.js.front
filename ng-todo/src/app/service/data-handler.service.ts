import { Injectable } from '@angular/core';
import { TestData } from '../data/testData';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  constructor() {}

  getCategories(): Category[] {
    return TestData.categories;
  }
}
