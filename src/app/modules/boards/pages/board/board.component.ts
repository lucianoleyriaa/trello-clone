import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Dialog } from '@angular/cdk/dialog';
import { TaskDialogComponent } from 'src/app/modules/boards/components/task-dialog/task-dialog.component';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: []
})
export class BoardComponent implements OnInit {

    todo: Todo[] = [
        { id: '1', name: 'Get to work' },
        { id: '2', name: 'Pick up groceries' },
        { id: '3', name: 'Go home' },
        { id: '4', name: 'Fall asleep' },
    ];
    doing: Todo[] = [
        { id: '5', name: 'Get up' },
        { id: '6', name: 'Brush teeth' },
        { id: '7', name: 'Check e-mail' },
        { id: '8', name: 'Walk dog' },
    ];
    done: Todo[] = [
        { id: '9', name: 'Take a shower' },
        { id: '10', name: 'Take out the garbage' },
        { id: '11', name: 'Do the laundry' },
    ];

    columns = [
        { name: 'To Do', items: this.todo },
        { name: 'Doing', items: this.doing },
        { name: 'Done', items: this.done },
    ];

    constructor(
        private dialogService: Dialog,
    ) { }

    ngOnInit(): void {
    }

    drop(e: CdkDragDrop<Todo[]>) {
        if (e.container === e.previousContainer) return moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
        transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex);
    }

    onAddColumn() {
        this.columns.push({ name: 'New Column', items: [] });
    }

    onOpenTask(todo: Todo) {
        const dialogRef = this.dialogService.open(TaskDialogComponent, {
            width: '650px',
            autoFocus: false,
            data: { todo }
        });

        // Recive data from closed modal
        dialogRef.closed.subscribe(data => {
            // console.log(data);
        });
    }

}
