import { NgModule } from '@angular/core';
import { InstructRoutingModule } from './instruct-routing.module';
import { CommonModule } from '@angular/common';
import { InstructOrderPurchaseComponent } from './components/instruct-order-purchase/instruct-order-purchase.component';

@NgModule({
  declarations: [InstructOrderPurchaseComponent],
  imports: [
    CommonModule,
    InstructRoutingModule,
  ],
})
export class InstructModule {}
