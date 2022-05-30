import { Component, Input, OnInit } from '@angular/core';
import { Courses_info } from '../courses/models/courses';

@Component({
  selector: 'SHP-cour-part2',
  templateUrl: './cour-part2.component.html',
  styleUrls: ['./cour-part2.component.css']
})
export class CourPart2Component implements OnInit {
@Input()courses_info:Courses_info={} as Courses_info;
classname='fa-brands fa-angular';
  constructor() { }

  ngOnInit(): void {
  }

}
