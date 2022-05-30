import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Head } from '../part1/model/part';

@Component({
  selector: 'SHP-full-skills',
  templateUrl: './full-skills.component.html',
  styleUrls: ['./full-skills.component.css']
})
export class FullSkillsComponent implements OnInit {
 
  constructor(private appService:AppDataService) { }

  ngOnInit(): void {
  }
get Information(){
  return this.appService.Informationskill;
}
}
