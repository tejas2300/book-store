import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { APIComponent } from './api/api.component';
import { BooksGetComponent } from './books-get/books-get.component';
import { SliderComponent } from './slider/slider.component';
import { TemplateFormsDemoComponent } from './components/template-forms-demo/template-forms-demo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'api', component: APIComponent },
  { path: 'Tejas', component: BooksGetComponent },
  { path: 'course', component: TemplateFormsDemoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
