import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  @Input() movies: any;

  ngOnInit(): void {

  }

  printMovies(){
    console.log(this.movies);
  }

}
