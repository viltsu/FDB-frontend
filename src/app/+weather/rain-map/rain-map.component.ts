import {Component, OnInit, OnDestroy} from '@angular/core';
import {RainMap} from "../../shared/model/RainMap";
import {RainMapApi} from "../../shared/api/RainMapApi";

@Component({
  selector: 'rain-map',
  templateUrl: './rain-map.component.html',
  styleUrls: ['./rain-map.component.css'],
  providers: [RainMapApi]
})
export class RainMapComponent implements OnInit, OnDestroy {

  active:number = 0;
  rainMaps:RainMap[];
  private ticker;

  constructor(private rainMapApi:RainMapApi) {}

  setActive(index:number) {
    this.active = index
  }

  next() {
    if (this.active < this.rainMaps.length - 1) {
      this.active++;
    } else {
      this.active = 0;
    }
  }

  getRainMaps() {

  }

  ngOnInit() {
    this.rainMapApi.rainMapFetchImages().subscribe(
      rainMaps => {
        this.rainMaps = rainMaps.reverse();
        this.ticker = setInterval(() => {
          this.next();
        }, 1000)
      },
      err => console.log(err)
    )
  }

  ngOnDestroy() {
    if (this.ticker) {
      clearInterval(this.ticker);
    }
  }

}
