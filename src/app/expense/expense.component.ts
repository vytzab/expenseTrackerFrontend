import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseDataService } from '../service/data/expense-data.service';
import { Expense } from '../list-expenses/list-expenses.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  id : number = 1
  expense: Expense = new Expense(1, '', '', 1, '', new Date(), new Date(), new Date())

  constructor(
    private expenseService: ExpenseDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.expense.id = this.id;

    if (this.id != -1) {
      this.expenseService.readExpense(this.id).subscribe(
        data => this.expense = data
      )
    }
  }

  saveExpense() {
    if (this.id == -1) {
      this.expenseService.createExpense(this.expense).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['expenses'])
        }
      )
    } else {
      this.expenseService.updateExpense(this.id, this.expense).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['expenses'])
        }
      )
    }
  }
}
