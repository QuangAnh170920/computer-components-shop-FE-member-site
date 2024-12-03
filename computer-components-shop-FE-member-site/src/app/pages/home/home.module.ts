import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { CarouselModule } from "primeng/carousel";
import { CardModule } from "primeng/card";

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      CarouselModule,
      CardModule
    ]
  })
  export class HomeModule { }