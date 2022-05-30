import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SHP-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
URL={
  "fa-brands fa-github":"#",
  "fa-brands fa-facebook":"#",
 "fa-brands fa-twitter-square":"#"
}
  constructor() { }

  ngOnInit(): void {
  }

}
