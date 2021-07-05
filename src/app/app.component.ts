import { BudgetItem } from './../shared/module/budget-item';
import { Component, Input, EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Budget-calculator';

  budgetItems : BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  addItem(newItem :BudgetItem){
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  onDeleteItems(item: BudgetItem){
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index,1);
    this.totalBudget -= item.amount;
  }
}
