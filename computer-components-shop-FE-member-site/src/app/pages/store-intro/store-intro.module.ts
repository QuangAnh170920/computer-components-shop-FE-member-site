import { NgModule } from '@angular/core';
import { StoreIntroComponent } from './components/store-intro/store-intro.component';
import { CommonModule } from '@angular/common';
import { StoreIntroRoutingModule } from './store-intro-routing.module';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [StoreIntroComponent],
  imports: [
    CommonModule, 
    StoreIntroRoutingModule,
    MenuModule,
],
})
export class StoreIntroModule {}
