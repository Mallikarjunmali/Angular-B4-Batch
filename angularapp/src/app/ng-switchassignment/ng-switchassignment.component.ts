import { Component, OnInit } from '@angular/core';
import { Student } from '../data-binding/models/students';

@Component({
  selector: 'app-ng-switchassignment',
  templateUrl: './ng-switchassignment.component.html',
  styleUrls: ['./ng-switchassignment.component.css']
})
export class NgSwitchassignmentComponent implements OnInit {
  isShow:boolean=true;
  title:string="Top 3 student";
  students:Student[]=[ 
    {name:'Swati',degree:'BE Mechanical',univercity:'Vtu',year:'2018'},
    {name:'Asha',degree:'Bsc',univercity:'Ranichannamma',year:'2019'},
    {name:'Jyoti',degree:'Bcom',univercity:'KEA',year:'2020'},
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
