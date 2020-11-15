import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import {FooddetailsComponent} from './fooddetails/fooddetails.component';
import { KitchenMenuComponent } from './kitchen-menu/kitchen-menu.component';
import { KitchentoolDetailsComponent } from './kitchentool-details/kitchentool-details.component';
import { FoodDonationComponent } from './food-donation/food-donation.component';
import { FallWineBundlesComponent } from './fall-wine-bundles/fall-wine-bundles.component';
import { EssentialWinesComponent } from './essential-wines/essential-wines.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';
import { WineComponent } from './wine/wine.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'cart',component:CartComponent,canActivate: [AuthGuard]},
  {path:'kitchenmenu',component:KitchenMenuComponent,canActivate: [AuthGuard]},
  {path:'details/:id',component:FooddetailsComponent},
  {path:'kitchendetails/:id',component:KitchentoolDetailsComponent},
  {path:'fooddonation',component:FoodDonationComponent},
  {path:'fallwines',component:FallWineBundlesComponent},
  {path:'essentialwines',component:EssentialWinesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'wine',component:WineComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
