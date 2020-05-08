import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild([])],
  exports: [RouterModule, MaterialModule, HeaderComponent],
})
export class CoreModule { }
