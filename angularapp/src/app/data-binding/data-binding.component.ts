import { Component, OnInit } from "@angular/core";

 

@Component({ 
  selector:'app-data-binding',
  template:'./data-binding.component.html',
  styleUrls:['./data-binding.component.css']

})


 export class DataBindingComponent implements OnInit{ 
  userName:string='Mallikarjun05673';
  allowNewServer=false;

  constructor() {}

  ngOnInit() { 

  }
  onClickReset(){ 

    this.userName=""
  }
  }

 