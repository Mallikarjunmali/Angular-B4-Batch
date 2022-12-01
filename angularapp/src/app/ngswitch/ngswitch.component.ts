import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  selectedProduct:string;

  constructor() { }

  ngOnInit() {
  }
  getProductValue(value) { 
    console.log(value.targate.value);
    this.selectedProduct=value.targate.value;
    
  }

}
