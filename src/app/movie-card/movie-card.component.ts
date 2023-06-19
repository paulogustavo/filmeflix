import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  constructor() { }

  @Input() movie : any;

  baseUrl = "https://image.tmdb.org/t/p/original/";

  ngOnInit(): void {
  }

}
