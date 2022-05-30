import { Injectable } from '@angular/core';
import { Courses_info } from '../pages/courses/models/courses';
import { Education } from '../pages/education/models/info_Education';
import { Experiance_Info, type_of_Exp } from '../pages/experiance/models/Experiance';
import { Head } from '../pages/part1/model/part';
import { Project_info } from '../pages/projects/models/projects';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  Courses_information:Courses_info[]=[
    {
      name:"Front_End",
      startdate:"22/5/2020",
      enddate:"5/8/2020",
      company:"Vision plus center",
      icon:'fa-solid fa-code'
    },
    {
      name:"UX/UI design",
      startdate:"1/1/2020",
      enddate:"8/4/2020",
      company:"Alaslam center",
      icon:'fa-solid fa-pen-to-square'
    }, 
   
    {
      name:"Angular",
      startdate:"10/3/2021",
      enddate:"2/8/2021",
      company:"GGateway",
      icon:'fa-brands fa-angular'
    }
  ]
  Information_Education:Education[]=[
    {
      degree:"Diploma",
      university:"Gaza Training College",
      field:"Executive Secretary",
      startDate:"10/9/2017",
      EndDate:"25/6/2019",
      GPA:93.2
    },
    {
      degree:"Bachelor",
      university:"ِAlaqsa University",
      field:"Information Technology",
      startDate:"15/9/2019",
      EndDate:"25/7/2023",
      GPA:94
    },
    {
      degree:"Master",
      university:"Islamic University",
      field:"Artificial intelligence",
      startDate:"12/9/2023",
      EndDate:"24/7/2026",
      GPA:94
    },
  ]
  Experiance:Experiance_Info[]=[
    {
      title:'Front_End developer',
      type:type_of_Exp.contract,
      Startdate:'22/4/2019',
      Enddate:'29/12/2019',
      company:'Vision Plus center',
      description:'develop a user interface in web application using html,css,js,bootstrap.'
    },
    {
      title:'UX/UI designer',
      type:type_of_Exp.partTime,
      Startdate:'10/1/2020',
      Enddate:'28/7/2020',
      company:'UNRWA Office',
      description:'design a web application by xd program and mobile application for compony'
    },


    {
      title:'Back_End Developer',
      type:type_of_Exp.freeLance,
      Startdate:'28/2/2021',
      Enddate:'6/4/2022',
      company:'Hexa Company',
      description:'make creating and maintaining technology at the back end of a website.'
    },
 
  ]
  Project:Project_info[]=[
    {
      name:"Student Gate",
      startdate:"22/10/2019",
      enddate:"30/12/2019",
      URL:"http://www.google.com",
      desc:"it solve the problem that face every student",
      img:"../../../assets/images/pro1.jpg"
    },
    {
      name:"Student Gate",
      startdate:"5/4/2020",
      enddate:"9/9/2020",
      URL:"www.googl.com",
      desc:"it solve the problem that face every student",
      img:"../../../assets/images/pro2.jpg"
    },
    {
      name:"Student Gate",
      startdate:"22/5/2021",
      enddate:"7/7/2022",
      URL:"www.googl.com",
      desc:"it solve the problem that face every student",
      img:"../../../assets/images/pro3.jpg"
    },
    {
      name:"Student Gate",
      startdate:"9/1/2022",
      enddate:"9/5/2022",
      URL:"www.googl.com",
      desc:"it solve the problem that face every student",
      img:"../../../assets/images/pro4.jpg"
    },

  ]
  language = {
    'English':['50%','55%' ,'80%'],
    'Arabic':['50%','55%' ,'80%'],
    'Frensh':['40%','75%' ,'30%'],
  }
  Information:Head={
    title:'Courses',
    des:'Lorem itatis dolor adipisci tempora invque temporibus autem dolore est, assumenda praesentium sunt voluptatibus soluta!'
  }
  InformationPro:Head={
    title:'Projects',
    des:'Lorem itatis dolor adipisci tempora invque temporibus autem dolore est, assumenda praesentium sunt voluptatibus soluta!'
  }
  Informationlan:Head={
    title:'Language',
    des:'Lorem itatis dolor adipisci tempora invque temporibus autem dolore est, assumenda praesentium sunt voluptatibus soluta!'
  }
  Informationskill:Head={
    title:'Skills',
    des:'Lorem itatis dolor adipisci tempora invque temporibus autem dolore est, assumenda praesentium sunt voluptatibus soluta!'
  }
  InformationExp:Head={
    title:'Experiance',
    des:'Lorem itatis dolor adipisci tempora invque temporibus autem dolore est, assumenda praesentium sunt voluptatibus soluta!'
  }
  constructor() { }
}
