import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Expense } from 'src/app/list-expenses/list-expenses.component';

@Injectable({
  providedIn: 'root'
})
export class ExpenseDataService {

  constructor(
    private http : HttpClient
  ) { }

  createExpense(expense: Expense) {
    return this.http.post(`${API_URL}/expenses`, expense)
  }

  readAllExpenses() {
    return this.http.get<Expense[]>(`${API_URL}/expenses`)
  }

  readExpense(id : number) {
    return this.http.get<Expense>(`${API_URL}/expenses/${id}`)
  }

  updateExpense(id: number, expense: Expense) {
    return this.http.put(`${API_URL}/expenses/${id}`, expense)
  }

  deleteExpense(id : number) {
    return this.http.delete(`${API_URL}/expenses/${id}`)
  }
}
