import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoAndAdviceComponent } from './pages/info-and-advice/info-and-advice.component';
import { TipsComponent } from './pages/tips/tips.component';
const routes: Routes = [
  {
    path: "",
    // component: HomeComponent,
    redirectTo:"home/good",
    pathMatch:'full'
  }, {
    path: "home/:mood",
    component: HomeComponent
  }, {
    path: "advice",
    component: InfoAndAdviceComponent
  },
  {
    path: "tips",
    component: TipsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
