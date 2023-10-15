import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';
import { take } from 'rxjs';
import { OfficeService } from './office.service';

interface Choose {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'moretech';
  coords: any;
  offices: any[] | undefined;
  openOffices: any[] | undefined;
  closeOffices: any[] | undefined;
  sidebarVisible: boolean = true;
  roadVisible: boolean = false;
  sidebarAll: boolean = false;

  selectedOffice: any;

  services: Choose[] = [
    { name: 'Все услуги', code: 'NY' },
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedService: Choose = { name: 'Все услуги', code: 'NY' };

  parameters: ymaps.control.IRoutePanelParameters | undefined;

  placemarkOptionsOpen: ymaps.IPlacemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref:
      '../assets/open_office.svg',
    iconImageSize: [32, 32],
    hasBalloon: true,
    openEmptyBalloon: true,
  };

  placemarkOptionsClose: ymaps.IPlacemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref:
    '../assets/close_office.svg',
    iconImageSize: [32, 32],
    hasBalloon: true,
    openEmptyBalloon: true,
  };

  constructor(private readonly geolocation$: GeolocationService, private officeService: OfficeService) {}

  ngOnInit() {
    this.geolocation$.pipe(take(1)).subscribe(position => {this.coords=position.coords; console.log(position.coords)});
    this.officeService.getOffices().subscribe(o => {
      this.offices=o; 
      console.log(this.offices);

      this.openOffices = this.offices.filter(function(elem) {
        if (elem.isOpen) {
          return true;
        } else {
          return false;
        }
      });

      this.closeOffices = this.offices.filter(function(elem) {
        if (!elem.isOpen) {
          return true;
        } else {
          return false;
        }
      });
    })
  }

  chooseOffice(id: number, event: any) {
    this.sidebarAll = false;
    event.target.balloon.close();
    this.officeService.getOffice(id).subscribe(office => {
      this.selectedOffice = office;
      this.sidebarVisible = true;
    })
    this.roadVisible = false;
  }

  getRoad() {
    this.parameters = {
      options: {
        allowSwitch: false,
        reverseGeocoding: true,
        types: { masstransit: true, pedestrian: true, taxi: true }
      },
      state: {
        type: 'masstransit',
        fromEnabled: false,
        from: `${this.coords.latitude}, ${this.coords.longitude}`,
        toEnabled: false,
        to: `${this.selectedOffice.lat}, ${this.selectedOffice.lon}`
      }
    };
    this.roadVisible = true;
    this.sidebarVisible = false;
  }


  data = {
    labels: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    datasets: [
        {
            backgroundColor: "#3B83F1",
            borderColor: "#3B83F1",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 5,
    plugins: {
      legend: {
          display: false
      }
  },
    scales: {
        x: {
            ticks: {
                color: 'black',
                font: {
                    weight: 500
                }
            },
            grid: {
              display: false,
              color: "rgba(0, 0, 0, 0)"
            } 
        },
        y: {
          ticks: {
              display: false,
              color: 'black',
              font: {
                  weight: 500
              }
          },
          grid: {
            display: false,
            color: "rgba(0, 0, 0, 0)"
          } 
      }

    }
};
}
