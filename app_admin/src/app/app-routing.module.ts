import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { TripAddComponent } from "./trip-add/trip-add.component";
import { TripEditComponent } from "./trip-edit/trip-edit.component";
import { TripDeleteComponent } from "./trip-delete/trip-delete.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: TripListingComponent, pathMatch: "full" },
  { path: "add-trip", component: TripAddComponent },
  { path: "edit-trip", component: TripEditComponent },
  { path: "delete-trip", component: TripDeleteComponent },
  { path: "login", component: LoginComponent },
  { path: "list-trips", component: TripListingComponent },
  { path: "", component: HomeComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
