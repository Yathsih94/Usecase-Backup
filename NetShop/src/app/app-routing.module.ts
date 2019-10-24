import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { PaymentComponent } from './home/payment/payment.component';
import { CartComponent } from './home/cart/cart.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'payment', component: PaymentComponent
      },
      {
        path: 'cart', component: CartComponent
      }
    ]
  },
  {
    path: '**', redirectTo: 'home/product'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
