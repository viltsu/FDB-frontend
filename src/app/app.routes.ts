import { provideRouter, RouterConfig } from '@angular/router';

import {WeatherComponent} from './+weather/weather.component';
import {QuoteComponent} from './+quote/quote.component';
import {RepoBrowser} from './github/repo-browser/repo-browser';
import {TransportComponent} from './+transport/transport.component';
import {RepoDetail} from './github/repo-detail/repo-detail';

const routes: RouterConfig = [
  { path: '', redirectTo: 'quote', terminal: true },
  { path: 'quote', component: QuoteComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'transport', component: TransportComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
