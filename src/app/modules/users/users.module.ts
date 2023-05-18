import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersTableComponent } from './pages/users-table/users-table.component';
import { UsersRoutingModule } from './users-routing.module';
import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  declarations: [
    UsersTableComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
  ],
  exports: [
    UsersRoutingModule,
    CdkTableModule,
  ]
})
export class UsersModule { }
