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

  async fetchSpecificGenre(text: string) {
    switch(text){
      case "Trending": {
        const response = await axios.get(urls.fetchTreding);
        this.movies = response.data.results;
        break;
      }

      case "Top Rated": {
        const response = await axios.get(urls.fetchTopRated);
        this.movies = response.data.results;
        break;
      }

      case "Action": {
        const response = await axios.get(urls.fetchActionMovies);
        this.movies = response.data.results;
        break;
      }

      case "Comedy": {
        const response = await axios.get(urls.fetchComedyMovies);
        this.movies = response.data.results;
        break;
      }

      case "Horror": {
        const response = await axios.get(urls.fetchHorrorMovies);
        this.movies = response.data.results;
        break;
      }

      case "Romance": {
        const response = await axios.get(urls.fetchRomanceMovies);
        this.movies = response.data.results;
        break;
      }

      case "Mistery": {
        const response = await axios.get(urls.fetchMistery);
        this.movies = response.data.results;
        break;
      }

      case "Sci-Fi": {
        const response = await axios.get(urls.fetchSciFi);
        this.movies = response.data.results;
        break;
      }

      case "Western": {
        const response = await axios.get(urls.fetchWestern);
        this.movies = response.data.results;
        break;
      }

      case "Animation": {
        const response = await axios.get(urls.fetchAnimation);
        this.movies = response.data.results;
        break;
      }

    }
  }

}
