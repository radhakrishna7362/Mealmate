import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { KitchenMenuComponent } from './kitchen-menu/kitchen-menu.component';
import { KitchentoolDetailsComponent } from './kitchentool-details/kitchentool-details.component';
import { FallWineBundlesComponent } from './fall-wine-bundles/fall-wine-bundles.component';
import { EssentialWinesComponent } from './essential-wines/essential-wines.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FoodDonationComponent } from './food-donation/food-donation.component';
import { CartComponent } from './cart/cart.component';
import { WineComponent } from './wine/wine.component';
import { FallWineBundleDetailsComponent } from './fall-wine-bundle-details/fall-wine-bundle-details.component';
import { EssentialWineBundleDetailsComponent } from './essential-wine-bundle-details/essential-wine-bundle-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderComponent } from './order/order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { CartConfirmComponent } from './cart-confirm/cart-confirm.component';
import { FoodThanksComponent } from './food-thanks/food-thanks.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { FooddetailsReceipeComponent } from './fooddetails-receipe/fooddetails-receipe.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { DeleteComponent } from './delete/delete.component';

import { FavoriteService } from './services/favorite.service';
import { CartService } from './services/cart.service';
import { FoodService } from './services/food.service';
import { KitchentoolsService } from './services/kitchentools.service';
import {FoodDonationService} from './services/food-donation.service';
import {WineService} from './services/wine.service';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { ContactService } from './services/contact.service';
import { AuthGuard } from './auth.guard';
import { SnackbarService } from './services/snackbar.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { SpinnerService } from './services/spinner.service';
import { SpinnerInterceptorService } from './services/spinner-interceptor.service';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MenuComponent,
    FooddetailsComponent,
    KitchenMenuComponent,
    KitchentoolDetailsComponent,
    FoodDonationComponent,
    FallWineBundlesComponent,
    EssentialWinesComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    WineComponent,
    FallWineBundleDetailsComponent,
    EssentialWineBundleDetailsComponent,
    PageNotFoundComponent,
    OrderComponent,
    ThankYouComponent,
    CartConfirmComponent,
    FoodThanksComponent,
    ContactComponent,
    ProfileComponent,
    ProfileEditComponent,
    FooddetailsReceipeComponent,
    FavouritesComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTableModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
  ],
  providers: [FoodService,KitchentoolsService,SpinnerService,FoodDonationService,WineService,AuthService,CartService,OrderService,ContactService,SnackbarService,AuthGuard,FavoriteService,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
