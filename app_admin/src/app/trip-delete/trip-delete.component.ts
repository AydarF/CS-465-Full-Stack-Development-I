import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TripDataService } from "../services/trip-data.service";
//import { Trip } from 'models/trip';
//import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: "app-trip-delete",
  templateUrl: "./trip-delete.component.html",
  styleUrls: ["./trip-delete.component.css"],
})
export class TripDeleteComponent implements OnInit {
  constructor(private router: Router, private tripService: TripDataService) {}

  ngOnInit() {
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed the tripCode!");
      this.router.navigate([""]);
      return;
    }

    console.log("TripDeleteComponent found tripCode " + tripCode);

    this.tripService.deleteTrip(tripCode).then((data) => {
      console.log(data);
      this.router.navigate(["list-trips"]);
    });
  }
}
