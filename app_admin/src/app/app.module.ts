import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { TripCardComponent } from "./trip-card/trip-card.component";
import { TripAddComponent } from "./trip-add/trip-add.component";
import { TripDataService } from "./services/trip-data.service";
import { TripEditComponent } from "./trip-edit/trip-edit.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    TripAddComponent,
    TripEditComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [TripDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
