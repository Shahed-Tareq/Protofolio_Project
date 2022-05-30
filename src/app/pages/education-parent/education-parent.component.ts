import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/shared/app-data.service';
import { Education } from '../education/models/info_Education';
import { Head } from '../part1/model/part';

@Component({
  selector: 'SHP-education-parent',
  templateUrl: './education-parent.component.html',
  styleUrls: ['./education-parent.component.css']
})
export class EducationParentComponent implements OnInit {
  
  Information:Head={
    title:'Education',
    des:'Lorem itatis dolor adipisci tempora invque temporibus autem dolore est, assumenda praesentium sunt voluptatibus soluta!'
  }
  constructor(private appService: AppDataService) { }

  ngOnInit(): void {
  }
  get Education(){
    return this.appService.Information_Education;
  }

}
