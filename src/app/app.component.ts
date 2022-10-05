import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { ClimaService } from './services/clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./scss/style.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: ClimaService) {}

  weatherData?: WeatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('Quito').subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
  title = 'clima';
}
