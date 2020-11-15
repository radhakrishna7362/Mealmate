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

import {TokenInterceptorService} from './services/token-interceptor.service';
import { CartService } from './services/cart.service';
import { FoodService } from './services/food.service';
import { KitchentoolsService } from './services/kitchentools.service';
import {FoodDonationService} from './services/food-donation.service';
import {WineService} from './services/wine.service';
import { AuthService } from './services/auth.service';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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
import { FallWineBundleDetailsComponent } from './fall-wine-bundle-details/fall-wine-bundle-details.component';
import { EssentialWineBundleDetailsComponent } from './essential-wine-bundle-details/essential-wine-bundle-details.component';

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
    EssentialWineBundleDetailsComponent
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
    MatTooltipModule
  ],
  providers: [FoodService,KitchentoolsService,FoodDonationService,WineService,AuthService,CartService,TokenInterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
