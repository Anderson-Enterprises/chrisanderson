import { Component, OnInit } from '@angular/core';
import { AndersonService } from '../anderson.service';
import { Weather } from './weather';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  weather: Weather[] = [];
  constructor(private andersonService: AndersonService) { }

  ngOnInit() {
    this.andersonService.getData().subscribe({
      next: weather => this.weather = weather
    });
  }

}
