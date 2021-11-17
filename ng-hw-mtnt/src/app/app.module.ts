import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CartList } from "./cart-list.component";
import { TestComponent } from "./test.component";
import { DataModule } from "./data/data.module";
import { RouterModule, Routes } from "@angular/router";
import { FormsComponent } from "./forms.component";
import { AboutComponentComponent } from "./about-component/about-component.component";
import { BasicBindignComponent } from "./basic-bindign.component";
import { DirectivesComponent } from "./directives.component";
import { StoreModule } from "@ngrx/store";
import { StoreViewComponent } from "./store-view.component";
import { booksReducer } from "./state/books.reducer";
import { collectionReducer } from "./state/collection.reducer";
import { BookListComponent } from "./book-list/book-list.component";
import { BookCollectionComponent } from "./book-collection/book-collection.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { MatSliderModule } from "@angular/material/slider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { GridComponent } from "./grid/grid.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { UsercrudComponent } from "./usercrud/usercrud.component";
import { GridContainerComponent } from "./grid-container/grid-container.component";
import { DragDropModule } from "@angular/cdk/drag-drop";

const routes: Routes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "forms", component: FormsComponent },
  { path: "binding", component: BasicBindignComponent },
  { path: "about", component: AboutComponentComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "storeview", component: StoreViewComponent },
  { path: "reactiveform", component: ReactiveFormComponent },
  { path: "grid", component: GridContainerComponent },
  { path: "crud", component: UsercrudComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    ReactiveFormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
  ],
  declarations: [
    AppComponent,
    CartList,
    TestComponent,
    FormsComponent,
    AboutComponentComponent,
    BasicBindignComponent,
    DirectivesComponent,
    StoreViewComponent,
    BookListComponent,
    BookCollectionComponent,
    ReactiveFormComponent,
    GridComponent,
    UsercrudComponent,
    GridContainerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
