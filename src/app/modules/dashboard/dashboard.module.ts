import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, CoreModule],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
