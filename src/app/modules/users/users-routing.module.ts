import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsersTableComponent } from './pages/users-table/users-table.component';

const routes: Route[] = [
    { path: '', component: UsersTableComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class UsersRoutingModule { }
