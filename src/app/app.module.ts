import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveComponent } from './active/active.component';
import { BalanceComponent } from './balance/balance.component';
import { AvailableInvestmentComponent } from './available-investment/available-investment.component';
import { RecentTransactionComponent } from './recent-transaction/recent-transaction.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    BalanceComponent,
    AvailableInvestmentComponent,
    RecentTransactionComponent,
    EstimatorComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
