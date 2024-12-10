import { RouterModule, Routes } from "@angular/router";
import { SmartVacuumCleanerComponent } from "./components/smart-vacuum-cleaner/smart-vacuum-cleaner.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: '', component: SmartVacuumCleanerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmartVacuumCleanerRoutingModule {}