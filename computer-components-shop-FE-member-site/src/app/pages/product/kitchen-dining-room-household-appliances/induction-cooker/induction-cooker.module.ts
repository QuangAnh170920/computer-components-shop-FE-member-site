import { NgModule } from "@angular/core";
import { InductionCookerComponent } from "./components/induction-cooker/induction-cooker.component";
import { CommonModule } from "@angular/common";
import { InductionCookerRoutingModule } from "./induction-cooker-routing.module";
import { DropdownModule } from "primeng/dropdown";
import { PaginatorModule } from "primeng/paginator";
import { RatingModule } from "primeng/rating";
import { DialogModule } from "primeng/dialog";

@NgModule({
  declarations: [InductionCookerComponent],
  imports: [
    CommonModule, 
    InductionCookerRoutingModule,
    DropdownModule,
    PaginatorModule,
    RatingModule,
    DialogModule,
],
})
export class InductionCookerModule {}