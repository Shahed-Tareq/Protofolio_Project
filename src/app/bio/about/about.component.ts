import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SHP-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  titel = "About Me ....";
  p1="Shahed Tareq Abo Ghola, is a Front-End Developer specialized in develping website in angular framWork.";
  p2="Befor starting in develping web application , I spent 4 years in Business specalization , and working in this field.";
 p3_1="it had big impact on me and  mylife, there is a huge gap between the two specalization but";
 p3_span = "my patience , will, desire";
 p3_2="to learn ,to be the best and continue was greater than any obstical.";
 p4="The first resone for  my success that I'm committed  person and i can work under the presure, in addition i enjoy whatever task is assigned to me";
 
 
  constructor() { }

  ngOnInit(): void {
  }

}
