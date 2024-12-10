import { NgModule } from '@angular/core';
import { SmartVacuumCleanerComponent } from './components/smart-vacuum-cleaner/smart-vacuum-cleaner.component';
import { CommonModule } from '@angular/common';
import { SmartVacuumCleanerRoutingModule } from './smart-vacuum-cleaner-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [SmartVacuumCleanerComponent],
  imports: [
    CommonModule, 
    SmartVacuumCleanerRoutingModule,
    DropdownModule,
    PaginatorModule,
    RatingModule
],
})
export class SmartVacuumCleanerModule {}
