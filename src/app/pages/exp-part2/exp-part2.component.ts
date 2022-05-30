import { Component, Input, OnInit } from '@angular/core';
import { Experiance_Info } from '../experiance/models/Experiance';

@Component({
  selector: 'SHP-exp-part2',
  templateUrl: './exp-part2.component.html',
  styleUrls: ['./exp-part2.component.css']
})
export class ExpPart2Component implements OnInit {
  @Input() info_Exp:Experiance_Info={} as Experiance_Info;

  constructor() { }

  ngOnInit(): void {
  }

}
