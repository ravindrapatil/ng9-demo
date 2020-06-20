import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-moviecast',
  templateUrl: './moviecast.component.html',
  styleUrls: ['./moviecast.component.scss'],
})
export class MoviecastComponent implements OnInit {
  @Input() castcrews: any = [];
  itemsToShow = 9;
  text: string = "Show More";

  constructor() {}

  showMore() {
    if (this.itemsToShow === 9) {
      this.itemsToShow = this.castcrews.length;
      this.text = 'Show Less';
    } else {
      this.itemsToShow = 9;
      this.text = 'Show More';
    }
  }

  ngOnInit(): void {}
}
