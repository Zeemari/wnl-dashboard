import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveComponent } from './active/active.component';
import { BalanceComponent } from './balance/balance.component';
import { AvailableInvestmentComponent } from './available-investment/available-investment.component';
import { RecentTransactionComponent } from './recent-transaction/recent-transaction.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    BalanceComponent,
    AvailableInvestmentComponent,
    RecentTransactionComponent,
    RecentActivitiesComponent,
    EstimatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
