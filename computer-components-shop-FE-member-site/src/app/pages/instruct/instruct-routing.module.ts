import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructOrderPurchaseComponent } from './components/instruct-order-purchase/instruct-order-purchase.component';

const routes: Routes = [
  { path: '', component: InstructOrderPurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructRoutingModule {}
