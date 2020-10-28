import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import {FooddetailsComponent} from './fooddetails/fooddetails.component';
import { KitchenMenuComponent } from './kitchen-menu/kitchen-menu.component';
import { KitchentoolDetailsComponent } from './kitchentool-details/kitchentool-details.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'kitchenmenu',component:KitchenMenuComponent},
  {path:'details/:id',component:FooddetailsComponent},
  {path:'kitchendetails/:id',component:KitchentoolDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
