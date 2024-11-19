import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './src/components/home/home.component';
import { ProduitsComponent } from './src/components/produits/produits.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'produits', component: ProduitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
