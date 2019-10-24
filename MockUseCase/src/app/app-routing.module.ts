import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'products/:id', component: ProductDetailsComponent
  },
  {
    path: 'loan', component: LoanComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'user-credential', component: UserCredentialsComponent
  },
  {
    path: 'customer-home/:id', component: CustomerHomeComponent
  },
  {
    path: 'loan-details/:id', component: LoanDetailsComponent
  },
  {
    path: 'aboutus', component: AboutUsComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
