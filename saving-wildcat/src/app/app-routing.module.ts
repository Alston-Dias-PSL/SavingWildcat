import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'welcome',
    pathMatch:'full'
  },
  {
    path:'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'signin',
    component: SigninPageComponent
  },
  {
    path: 'home',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
