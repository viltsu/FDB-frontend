import {Component, OnInit} from '@angular/core';
import {QuoteApi} from "../shared/api/QuoteApi";
import {Quote} from "../shared/model/Quote";

@Component({
  selector: 'quote',
  pipes: [],
  providers: [ QuoteApi ],
  directives: [],
  styleUrls: ['./quote.component.css'],
  templateUrl: './quote.component.html'
})
export class QuoteComponent implements OnInit {

  quote:Quote;

  constructor(private quoteApi:QuoteApi) {}

  ngOnInit() {
    this.quoteApi.quoteRandom().subscribe(
      quote => this.quote = quote,
      err => console.log(err)
    )
  }
}
