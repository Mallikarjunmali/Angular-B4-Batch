import { Component, OnInit } from '@angular/core';
import { Direct } from 'protractor/built/driverProviders';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
  isShow:boolean=true;
  title:string="Top 3 Movies";
  movies:Movie[]=[ 
    {title:'3 Idiots',director:'Rajkumar',cast:'Amir',releaseDate:'2007'},
    {title:'Kantara',director:'Rishabshetty',cast:'Rishab',releaseDate:'2022'},
    {title:'KGF',director:'Prashanth Neel',cast:'Yash',releaseDate:'2019'},
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
