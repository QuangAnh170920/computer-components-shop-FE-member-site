import { NgModule } from '@angular/core';
import { PolicyComponent } from './components/policy/policy.component';
import { CommonModule } from '@angular/common';
import { PolicyRoutingModule } from './policy-routing.module';

@NgModule({
  declarations: [PolicyComponent],
  imports: [
    CommonModule,
    PolicyRoutingModule,
],
})
export class PolicyModule {}
