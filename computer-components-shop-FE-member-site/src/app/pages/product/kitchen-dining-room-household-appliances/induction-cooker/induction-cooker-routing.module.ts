import { RouterModule, Routes } from "@angular/router";
import { InductionCookerComponent } from "./components/induction-cooker/induction-cooker.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: '', component: InductionCookerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InductionCookerRoutingModule {}