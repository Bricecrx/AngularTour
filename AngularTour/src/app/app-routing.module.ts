import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    { path: '', redirectTo: 'authenticate', pathMatch: 'full' },
    { path: 'authenticate', component: AuthenticateComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
