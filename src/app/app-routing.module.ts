import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BaseComponent } from './base/base.component';
import { ConsumerLoginComponent } from './consumer-login/consumer-login.component';
import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergySavingTipsComponent } from './energy-saving-tips/energy-saving-tips.component';
import { FAQComponent } from './faq/faq.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { PayBillComponent } from './pay-bill/pay-bill.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ConsumerMainDashboardComponent } from './consumer-main-dashboard/consumer-main-dashboard.component';
import { AdminMainDashboardComponent } from './admin-main-dashboard/admin-main-dashboard.component';


const routes: Routes = [
  {path: "", component: BaseComponent},
  {path: "ConsumerLogin", component: ConsumerLoginComponent},
  {path: "AdminLogin", component: AdminLoginComponent},
  {path: "Dashboard", component: DashboardComponent},
  {path: "GenrateBill", component: GenerateBillComponent},
  {path: "PayBill", component: PayBillComponent},
  {path: "UserProfile", component: UserProfileComponent},
  {path: "Transaction", component: TransactionHistoryComponent},
  {path: "Faq", component: FAQComponent},
  {path: "Energy", component: EnergySavingTipsComponent},
  {path: "AdminDashboard", component: AdminDashboardComponent},
  {path: "CreateNewConsumer", component: CreateNewUserComponent},
  {path: "BaseLogin", component: BaseComponent},
  {path: "ConsumerMainDashboard", component: ConsumerMainDashboardComponent},
  {path: "AdminMainDashboard", component: AdminMainDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
