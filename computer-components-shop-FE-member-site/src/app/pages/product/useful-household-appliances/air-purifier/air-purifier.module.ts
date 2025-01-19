import { NgModule } from "@angular/core";
import { AirPurifierComponent } from "./components/air-purifier/air-purifier.component";
import { CommonModule } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { PaginatorModule } from "primeng/paginator";
import { RatingModule } from "primeng/rating";
import { DialogModule } from "primeng/dialog";
import { AirPurifierRoutingModule } from "./air-purifier-routing.module";

@NgModule({
  declarations: [AirPurifierComponent],
  imports: [
    CommonModule, 
    AirPurifierRoutingModule,
    DropdownModule,
    PaginatorModule,
    RatingModule,
    DialogModule,
],
})
export class AirPurifierModule {}