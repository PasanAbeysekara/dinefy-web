import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { PhotosApi } from '../../../models/photosApiModel';
import { Event } from 'src/app/models/api/eventsModel';
import { Choice } from 'src/app/models/api/choicesModel';
import { Cuisine } from 'src/app/models/api/cuisinesModel';
import { Tags } from 'src/app/models/api/tagsModel';
import { Facilities } from 'src/app/models/api/facilitiesModel';
import { GetEventsService } from 'src/app/services/get-events.service';
import { GetChoicesService } from 'src/app/services/get-choices.service';
import { GetCuisinesService } from 'src/app/services/get-cuisines.service';
import { GetTagsService } from 'src/app/services/get-tags.service';
import { GetFacilitiesService } from 'src/app/services/get-facilities.service';
import { GetLocationsService } from 'src/app/services/get-locations.service';
import { LocationsWrapper } from 'src/app/models/api/locationsModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiData: PhotosApi;
  limit: number = 10;
  events: Event[];
  choices: Choice[];
  cuisines: Cuisine[];
  tags: Tags[];
  facilities: Facilities[];
  locationsWrapper: LocationsWrapper;

  constructor(private readonly http: HttpClient,
              private getEventsService: GetEventsService,
              private getChoicesService: GetChoicesService,
              private getCuisinesService: GetCuisinesService,
              private getTagsService: GetTagsService,
              private getFacilitiesService: GetFacilitiesService,
              private getLocationsService: GetLocationsService) { }

  ngOnInit(): void {
    const element = document.getElementById('navbar');
    element.classList.remove('sticky');
    element.classList.add('home-header');
    this.fetch();

    this.getEventsService.getEventsInfo().subscribe(data => {
      this.events = data;
    }, error => {
      console.log(error);
    });

    this.getChoicesService.getChoicesInfo().subscribe(data => {
      this.choices = data;
    }, error => {
      console.log(error);
    });

    this.getCuisinesService.getCusinesInfo().subscribe(data => {
      this.cuisines = data;
    }, error => {
      console.log(error);
    });

    this.getTagsService.getTagsInfo().subscribe(data => {
      this.tags = data;
    }, error => {
      console.log(error);
    });

    this.getFacilitiesService.getFacilitiesInfo().subscribe(data => {
      this.facilities = data;
    }, error => {
      console.log(error);
    });

    this.getLocationsService.getLocationsInfo().subscribe(data => {
      this.locationsWrapper = data;
    }, error => {
      console.log(error);
    });

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 48) {
      const element = document.getElementById('navbar');
      element.classList.add('sticky');
      element.classList.remove('home-header');
    } else {
      const element = document.getElementById('navbar');
      element.classList.remove('sticky');
      element.classList.add('home-header');
    }
  }

  fetch() {
    const api = `https://jsonplaceholder.typicode.com/albums/1/photos?_start=0&_limit=${this.limit}`;
    const http$ = this.http.get<PhotosApi>(api);

    http$.subscribe(
      res => this.apiData = res,
      err => throwError(err)
    );
  }

}
