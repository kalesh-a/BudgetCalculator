import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculatorComponent } from './calculator/calculator.component';
import { InputSectionComponent } from './input-section/input-section.component';
import { BudgetItemsComponent } from './budget-items/budget-items.component';
import { BudgetItemCardComponent } from './budget-items/budget-item-card/budget-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InputSectionComponent,
    BudgetItemsComponent,
    BudgetItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
