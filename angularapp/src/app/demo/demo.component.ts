import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  // @Input()myinputMsg:string;
  // @Input()myinput:any;
  @Input()employee:'any';
  @Output() foodevent:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    // console.log('from parent', this.myinputMsg);
    // console.log(this.employee);
  }
  addtofood(value) {
    // foodevent is nothing but your custom event (foodevent)
    this.foodevent.emit(value);
    }

}
