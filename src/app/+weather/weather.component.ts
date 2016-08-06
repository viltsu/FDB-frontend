import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ForecastApi} from "../shared/api/ForecastApi";
import {RainMapApi} from "../shared/api/RainMapApi";
import {Forecast} from "../shared/model/Forecast";
import {RainMapComponent} from "./rain-map/rain-map.component";

@Component({
  selector: 'about',
  pipes: [],
  providers: [ForecastApi, RainMapApi],
  directives: [ RainMapComponent ],
  styleUrls: ['./weather.component.css'],
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  forecasts: Observable<Forecast[]>;

  constructor(private forecastApi:ForecastApi) {}

  ngOnInit() {
    this.forecasts = this.forecastApi.forecastFindGetForecasts(60.244801, 24.989);
  }
}
