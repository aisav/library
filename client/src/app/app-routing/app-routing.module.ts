import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home.component';
import { BookComponent } from '../components/book/book.component';
import { AuthorComponent } from '../components/author/author.component';

const appRoutes : Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home',  component: HomeComponent},  //Must be HomeComponent
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
