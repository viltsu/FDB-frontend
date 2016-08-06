import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {TrainApi} from "../shared/api/TrainApi";
import {Train} from "../shared/model/Train";
import {TrainLineComponent} from "./transport-line/train-line.component";

@Component({
  selector: 'transport',
  pipes: [],
  providers: [TrainApi],
  directives: [ ROUTER_DIRECTIVES, TrainLineComponent ],
  styleUrls: ['./transport.component.css'],
  templateUrl: './transport.component.html',
})
export class TransportComponent implements OnInit {
  trains: Observable<Train[]>;

  constructor(private route: ActivatedRoute, private trainApi: TrainApi) {
  }

  ngOnInit() {
    this.trains = this.trainApi.trainFindCurrent('PMK', '10')
  }
}
