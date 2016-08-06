import {Component, Input} from '@angular/core';
import {Train} from "../../shared/model/Train";

@Component({
  selector: 'train-line',
  templateUrl: './train-line.component.html'
})
export class TrainLineComponent {
  @Input() train: Train;
}
