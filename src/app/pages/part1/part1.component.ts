import { Component, Input, OnInit } from '@angular/core';
import { Head } from './model/part';


@Component({
  selector: 'SHP-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  @Input()Title:Head={} as Head;

  constructor() { }

  ngOnInit(): void {
  }

}
