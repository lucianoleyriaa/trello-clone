import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DialogModule } from '@angular/cdk/dialog';

import { SharedModule } from '../shared/shared.module';
import { BoardsRoutingModule } from './boards-routing.module';

import { TaskDialogComponent } from 'src/app/modules/boards/components/task-dialog/task-dialog.component';
import { BoardComponent } from './pages/board/board.component';
import { BoardsComponent } from './pages/boards/boards.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardsComponent,
    TaskDialogComponent,
  ],
  imports: [
    CommonModule,
    BoardsRoutingModule,
    DragDropModule,
    DialogModule,
    SharedModule,
  ]
})
export class BoardsModule { }
