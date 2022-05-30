import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SHP-footer',
  template: `
  <mat-toolbar id="cont">
    <h6> Contact me  </h6>
   <h6> <a href={{item.value}} *ngFor="let item of URL |keyvalue"> <i class={{item.key}}></i></a></h6>
</mat-toolbar>
  `,
  styles:[`
  .mat-toolbar{
padding:50px;
    justify-content: center;
    
  }
  a{
    color:white;
    padding-right:1.5rem;
    font-size: 25px;
  }
  h6{
    padding-right:10px;
    text-align:left
  }
  a:hover{
    color: rgba(33, 228, 26, 0.678);
  }`]
})
export class FooterComponent implements OnInit {
  URL={
    "fa-brands fa-github":"#",
    "fa-brands fa-linkedin":"#",
    "fa-solid fa-envelope":"#",
  "fa-brands fa-whatsapp-square":'#'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
