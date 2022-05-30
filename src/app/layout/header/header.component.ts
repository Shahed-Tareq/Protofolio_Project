import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'SHP-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url = 'http://www.google.com';
  // links = ['Home' , ' Education' , 'Skills','Courses','Experiance','Projects']
  Links= {
    'Home':"#",
    'Education':'#edu',
    'Skills':'#ski',
    'Courses':'#cor',
    'Experiances':'#exp',
    'Projects':'#pro',
    'Contact':'#cont',
    'Laguages':'#lan'
  }
  isSelected = 'home';
  Selected_item(item:string){
    this.isSelected=item;
    // console.log(item)
  }
 onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
