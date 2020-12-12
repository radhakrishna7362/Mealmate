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
import { FallWineBundleDetailsComponent } from './fall-wine-bundle-details/fall-wine-bundle-details.component';
import { EssentialWineBundleDetailsComponent } from './essential-wine-bundle-details/essential-wine-bundle-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { OrderComponent } from './order/order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {FoodThanksComponent} from './food-thanks/food-thanks.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'menu',component:MenuComponent},
  {path:'cart',component:CartComponent,canActivate: [AuthGuard]},
  // {path:'kitchenmenu',component:KitchenMenuComponent},
  // {path:'yourprofile/:id',component:ProfileComponent},
  // {path:'profile-edit/:id',component:ProfileEditComponent},
  {path:'details/:id',component:FooddetailsComponent},
  // {path:'kitchendetails/:id',component:KitchentoolDetailsComponent},
  {path:'fooddonation',component:FoodDonationComponent,canActivate: [AuthGuard]},
  {path:'fallwines',component:FallWineBundlesComponent},
  {path:'fallwine/:id',component:FallWineBundleDetailsComponent},
  {path:'essentialwine/:id',component:EssentialWineBundleDetailsComponent},
  {path:'essentialwines',component:EssentialWinesComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'wine',component:WineComponent},
  {path:'thankyou',component:ThankYouComponent},
  {path:'donationthanks',component:FoodThanksComponent},
  {path:'orders',component:OrderComponent,canActivate: [AuthGuard]},
  {path:'contactus',component:ContactComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
