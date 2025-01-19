import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SmartCookerComponent } from "./components/smart-cooker/smart-cooker.component";

const routes: Routes = [{ path: '', component: SmartCookerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartCookerRoutingModule {}