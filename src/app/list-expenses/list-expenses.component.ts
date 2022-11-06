import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id : number,
    public name : string,
    public description : string,
    public amount : number,
    public category : string,
    public date : Date,
    public createdAt : Date,
    public updatedAt : Date   
  ) {}
}

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  expenses = [
    new Todo( 1, 'Olive oil', 'Olive oil', 1, 'Groceries', new Date(), new Date(), new Date() ),
    new Todo( 2, 'Chicken', 'Chicken', 2, 'Groceries', new Date(), new Date(), new Date() ),
    new Todo( 3, 'Bread', 'Bread', 3, 'Groceries', new Date(), new Date(), new Date() )
  ]

  // expense = {
  //   id : 1,
  //   name : '',
  //   description : '',
	//   amount : 1,
  //   category : '',
	//   date : Date.now,
	//   createdAt : Date.now,
  //   updatedAt : Date.now    
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
