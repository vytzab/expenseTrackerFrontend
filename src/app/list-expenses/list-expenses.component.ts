import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseDataService } from '../service/data/expense-data.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  expenses: Expense[] = [];
  message: string = '';

  constructor(
    private expenseService: ExpenseDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshExpenses();
  }

  createExpense() {
    this.router.navigate(['expenses', -1]);
  }

  refreshExpenses() {
    this.expenseService.readAllExpenses().subscribe(
      response => {
        console.log(response);
        this.expenses = response;
      }
    )
  }

  updateExpense(id: number) {
    console.log(`update Expense ${id}`)
    this.router.navigate(['expenses', id]);
  }

  deleteExpense(id: number) {
    console.log(`delete Expense ${id}`)
    this.expenseService.deleteExpense(id).subscribe(
      response => {
        console.log(response)
        this.message = `Delete of Expense ${id} Successful!`;
        this.refreshExpenses();
      }
    )
  }
}

export class Expense {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public amount: number,
    public category: string,
    public date: Date,
    public createdAt: Date,
    public updatedAt: Date
  ) { }
}
