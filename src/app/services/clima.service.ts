import { HttpClient, HttpContext, HttpErrorResponse, HttpHandler, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { endWith, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private http:HttpClient) { }


  getWeatherData(cityName:string): Observable<WeatherData>{

  return this.http.get<WeatherData>(environment.weatherApiBaseUrl + cityName,{
      headers: new HttpHeaders()
      .set (environment.XRapiAPIHostHeaderName,environment.XRapiAPIHostHeaderValue)
      .set(environment.XRapiAPIKeyHeaderName, environment.XRapiAPIKeyHeaderValue),
    });
  }
}
