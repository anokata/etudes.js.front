import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

const routes: Routes = [
  { path: 'canvas', component: CanvasComponent },
  { path: 'app', component: AppComponent },
  { path: '**', redirectTo: 'canvas' },
];

@NgModule({
  declarations: [AppComponent, CanvasComponent],
  imports: [BrowserModule, RouterModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
