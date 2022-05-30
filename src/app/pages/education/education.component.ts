import { Component, Input, OnInit } from '@angular/core';
import { Education } from './models/info_Education';

@Component({
  selector: 'SHP-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() info_Edu:Education={} as Education;

  constructor() { }

  ngOnInit(): void {
  }

}
