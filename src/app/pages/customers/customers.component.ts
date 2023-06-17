import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnDestroy, OnInit {
  reorderable = true;
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

  onSort(event) {
    console.log(event);
  }



  ngOnDestroy(): void {
  }


}
