import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Head } from '../part1/model/part';
import { Project_info } from './models/projects';

@Component({
  selector: 'SHP-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
 

  constructor(private AppSerives:AppDataService) { }

  ngOnInit(): void {
  }
get Project(){
  return this.AppSerives.Project;
}
get InformationPro(){
  return this.AppSerives.InformationPro;
}
}
