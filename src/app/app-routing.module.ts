import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstSectionComponent } from './first-section/first-section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {​​path :'header' , component: HeaderComponent}​​,
  {​​path :'first-section' , component: FirstSectionComponent}​​,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
