import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'viewAll', component: HomeComponent },
  { path: 'viewMore/:id', component: DetailedViewComponent },
  { path: 'home', component: LandingComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
