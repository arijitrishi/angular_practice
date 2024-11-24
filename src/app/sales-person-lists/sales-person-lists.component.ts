import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-lists',
  templateUrl: './sales-person-lists-bootstrap.component.html',
  styleUrls: ['./sales-person-lists.component.css']
})
export class SalesPersonListsComponent implements OnInit {

  //create an array of object

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Arijit", "Ghosh", "Arijit@gmail.com",50000),
    new SalesPerson("Alex", "ander", "Alex@gmail.com",60000)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
