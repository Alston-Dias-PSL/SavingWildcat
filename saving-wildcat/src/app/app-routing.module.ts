import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
