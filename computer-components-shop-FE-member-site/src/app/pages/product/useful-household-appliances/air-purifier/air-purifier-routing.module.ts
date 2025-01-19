import { RouterModule, Routes } from "@angular/router";
import { AirPurifierComponent } from "./components/air-purifier/air-purifier.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: '', component: AirPurifierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirPurifierRoutingModule {}