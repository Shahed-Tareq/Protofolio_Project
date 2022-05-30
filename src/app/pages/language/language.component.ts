import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Head } from '../part1/model/part';

@Component({
  selector: 'SHP-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  // language = {
  //   'English':{'writing':'50%', 'reading':'55%' , 'speaking':'80%'},
  //   'Arabic':{'writing':'90%', 'reading':'85%' , 'speaking':'90%'}
  // }
  
  header=['#' , 'Language' , 'Writing' , 'Reading' , 'Speaking']
  
  constructor(private appSerives: AppDataService) { }

  ngOnInit(): void {
  }
  get language(){
    return this.appSerives.language;
  }

  get Informationlan(){
    return this.appSerives.Informationlan;
  }

}
