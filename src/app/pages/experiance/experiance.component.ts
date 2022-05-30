import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Head } from '../part1/model/part';
import { Experiance_Info, type_of_Exp } from './models/Experiance';

@Component({
  selector: 'SHP-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {

  
  
  constructor(private appSerives: AppDataService) { }

  ngOnInit(): void {
  }
  get Experiance(){
    return this.appSerives.Experiance;
  }
get information(){
  return this.appSerives.InformationExp;
}
}
