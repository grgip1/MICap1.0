// import { HomeComponent } from './home/home.component';
// import { AppComponent } from './app.component';

// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders, Component } from '@angular/core';

// export const router: Routes [
// { path:'', redirectTo: 'home.component', pathMatch: 'full'},
// { 'home.component', HomeComponent}
// ];

// export const routes: ModuleWithProviders = RouterModule.forRoot(router);

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
