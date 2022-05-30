import { Component, Input, OnInit } from '@angular/core';
import { Project_info } from '../projects/models/projects';

@Component({
  selector: 'SHP-pro-part2',
  templateUrl: './pro-part2.component.html',
  styleUrls: ['./pro-part2.component.css']
})
export class ProPart2Component implements OnInit {
@Input()project_info:Project_info={} as Project_info;
  constructor() { }

  ngOnInit(): void {
  }

}
