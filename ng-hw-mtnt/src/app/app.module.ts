import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
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

const routes: Routes = [
  { path: "", redirectTo: "about" },
  { path: "forms", component: FormsComponent },
  { path: "binding", component: BasicBindignComponent },
  { path: "about", component: AboutComponentComponent },
  { path: "directives", component: DirectivesComponent },
  { path: "storeview", component: StoreViewComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DataModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
