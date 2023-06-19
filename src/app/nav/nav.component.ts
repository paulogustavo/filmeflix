import { Component, OnInit } from '@angular/core';
import axios from '../axios-config';

import urls from '../urls';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  movies : any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const response  = await axios.get(urls.fetchTreding);
    this.movies = response.data.results;
  }

}
