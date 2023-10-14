import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'moretech';
  coords: any;

  constructor(private readonly geolocation$: GeolocationService) {}

  ngOnInit() {
    this.geolocation$.pipe(take(1)).subscribe(position => {this.coords=position.coords; console.log(position.coords)});

    //this.geolocation$.subscribe(position => {this.coords=position.coords; console.log(position.coords)});
  }
}
