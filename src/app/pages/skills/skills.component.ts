import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SHP-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills=['HTML' , 'CSS' , 'JS', 'Bootstrap' ,'Angular']

  constructor() { }

  ngOnInit(): void {
  }

}
