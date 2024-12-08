import { RouterModule, Routes } from "@angular/router";
import { PolicyComponent } from "./components/policy/policy.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: '', component: PolicyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
],
})
export class PolicyRoutingModule {}