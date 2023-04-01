import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FAQComponent } from './faq/faq.component';
import { EnergySavingTipsComponent } from './energy-saving-tips/energy-saving-tips.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { BillsComponent } from './bills/bills.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsumerMainDashboardComponent } from './consumer-main-dashboard/consumer-main-dashboard.component';
import { AdminMainDashboardComponent } from './admin-main-dashboard/admin-main-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    ConsumerLoginComponent,
    AdminLoginComponent,
    DashboardComponent,
    GenerateBillComponent,
    PayBillComponent,
    TransactionHistoryComponent,
    UserProfileComponent,
    FAQComponent,
    EnergySavingTipsComponent,
    AdminDashboardComponent,
    CreateNewUserComponent,
    BillsComponent,
    ConsumerMainDashboardComponent,
    AdminMainDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
