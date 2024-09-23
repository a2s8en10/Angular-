import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
 {
  path : 'Home',
  component: HomeComponent
 },
 {
  path : 'About/:id',
  component: AboutComponent

 },
 {
  path : 'Login',
  component: LoginComponent
 },
 {
  path : 'Signup',
  component: SignupComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
