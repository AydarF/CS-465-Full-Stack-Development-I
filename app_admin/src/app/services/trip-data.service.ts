import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { Trip } from "../models/trip";
import { User } from "../models/user";
import { AuthResponse } from "../models/authresponse";
import { BROWSER_STORAGE } from "../storage";

@Injectable()
export class TripDataService {
  constructor(
    private httpClient: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private apiBaseUrl = "http://localhost:3000/api";

  public async getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService#getTrips");
    return await lastValueFrom(
      this.httpClient.get<Trip[]>(`${this.apiBaseUrl}/trips`)
    ).catch(this.handleError);
  }

  public async getTrip(tripCode: string): Promise<Trip[]> {
    console.log(`Inside TripDataService#getTrip('${tripCode}')`);
    return await lastValueFrom(
      this.httpClient.get<Trip[]>(`${this.apiBaseUrl}/trips/${tripCode}`)
    ).catch(this.handleError);
  }

  public async addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#addTrip");
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storage.getItem("travlr-token")}`,
      }),
    };
    return await lastValueFrom(
      this.httpClient.post<Trip[]>(
        `${this.apiBaseUrl}/trips`,
        formData,
        httpOptions
      )
    ).catch(this.handleError);
  }

  public async updateTrip(formData: Trip): Promise<Trip[]> {
    console.log(`Inside TripDataService#updateTrip('${formData.code}')`);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storage.getItem("travlr-token")}`,
      }),
    };
    return await lastValueFrom(
      this.httpClient.put<Trip[]>(
        `${this.apiBaseUrl}/trips/${formData.code}`,
        formData,
        httpOptions
      )
    ).catch(this.handleError);
  }

  public async deleteTrip(tripCode: string): Promise<any> {
    console.log(`Inside TripDataService#deleteTrip('${tripCode}')`);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.storage.getItem("travlr-token")}`,
      }),
    };
    return await lastValueFrom(
      this.httpClient.delete(`${this.apiBaseUrl}/trips/${tripCode}`)
    ).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something has gone wrong", error);
    return Promise.reject(error.message || error);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("login", user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall("register", user);
  }

  private async makeAuthApiCall(
    urlPath: string,
    user: User
  ): Promise<AuthResponse> {
    console.log(`Inside TripDataService#makeAuthApiCall('${urlPath}')`);
    return await lastValueFrom(
      this.httpClient.post<AuthResponse>(`${this.apiBaseUrl}/${urlPath}`, user)
    ).catch(this.handleError);
  }
}
