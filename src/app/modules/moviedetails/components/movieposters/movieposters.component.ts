import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movieposters',
  templateUrl: './movieposters.component.html',
  styleUrls: ['./movieposters.component.scss']
})
export class MoviepostersComponent implements OnInit {
  @Input() posterts: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
