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
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { UsercrudComponent } from "./usercrud/usercrud.component";
import { GridContainerComponent } from "./grid-container/grid-container.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { UserDialogComponent } from "./user-dialog/user-dialog.component";
import { MatInputModule } from "@angular/material/input";
import { environment } from "src/environments/environment";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { AuthFormComponent } from "./auth-form/auth-form.component";
import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

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
  { path: "auth", component: AuthFormComponent },
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
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
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
    UserDialogComponent,
    AuthFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
