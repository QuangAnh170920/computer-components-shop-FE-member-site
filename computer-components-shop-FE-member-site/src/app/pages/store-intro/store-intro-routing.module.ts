import { RouterModule, Routes } from "@angular/router";
import { StoreIntroComponent } from "./components/store-intro/store-intro.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: '', component: StoreIntroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreIntroRoutingModule {}