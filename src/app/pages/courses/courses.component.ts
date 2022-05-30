import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Head } from '../part1/model/part';
import { Courses_info } from './models/courses';

@Component({
  selector: 'SHP-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {


  constructor(private appService: AppDataService) { }

  ngOnInit(): void {
  }
  get App_Services(){
    return this.appService.Courses_information;
  }
  get Information(){
    return this.appService.Information;
  }

}
