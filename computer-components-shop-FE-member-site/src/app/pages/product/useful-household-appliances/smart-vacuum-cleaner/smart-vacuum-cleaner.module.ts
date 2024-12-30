import { NgModule } from '@angular/core';
import { SmartVacuumCleanerComponent } from './components/smart-vacuum-cleaner/smart-vacuum-cleaner.component';
import { CommonModule } from '@angular/common';
import { SmartVacuumCleanerRoutingModule } from './smart-vacuum-cleaner-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [SmartVacuumCleanerComponent],
  imports: [
    CommonModule, 
    SmartVacuumCleanerRoutingModule,
    DropdownModule,
    PaginatorModule,
    RatingModule,
    DialogModule,
],
})
export class SmartVacuumCleanerModule {}
