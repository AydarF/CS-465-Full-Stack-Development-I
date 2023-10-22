import { Component, OnInit, Input } from "@angular/core";
import { Trip } from "../models/trip";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-trip-card",
  templateUrl: "./trip-card.component.html",
  styleUrls: ["./trip-card.component.css"],
})
export class TripCardComponent implements OnInit {
  @Input("trip") trip!: Trip;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  private editTrip(trip: Trip): void {
    console.log(
      "TripCardComponent#editTrip setting tripCode in localStorage",
      trip.code
    );
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    console.log("TripCardComponent#editTrip routing to TripEditComponent");
    this.router.navigate(["edit-trip"]);
  }

  private deleteTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(["delete-trip"]);
  }
}
