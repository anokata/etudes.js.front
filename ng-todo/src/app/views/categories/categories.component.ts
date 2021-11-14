import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.categorySubject.subscribe(
      (categories) => (this.categories = categories)
    );
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category);
  }

  showAllTasks($event: Event) {
    this.dataHandler.fillTasks();
    $event.preventDefault();
  }
}
