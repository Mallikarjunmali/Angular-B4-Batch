import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angularapp';
  // uname='I am from app component';
  // emp:any={ 
  //   empId:158441,
  //   empFirstName:'Mallikarjun',
  //   empLastName:'Mali',
  //   empDept:'IT',
  //   empcomp:'Wipro Limited.'
  // }

  EmployeeRecords:any=[ 
    { 
      eName:'Mallikarjun',ecity:'jath',esalary:'30000'
    },
    { 
      eName:'Asha',ecity:'Solapur',esalary:'25000'
    }
  ]
  foods: string[] = [];
  getDataFromChild(value) {
    console.log(value);
    this.foods.push(value);
  }

}

