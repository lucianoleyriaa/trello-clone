import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { faClosedCaptioning, faTimesCircle, faCheck, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'src/app/models/Todo';

interface InputData {
    todo: Todo,
}

interface OutputData {
    rta: boolean,
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html'
})

export class TaskDialogComponent {

    faTimesCircle = faTimesCircle;
    faClosedCaptioning = faClosedCaptioning;
    faCheckSquare = faCheckSquare;
    faCheck = faCheck;
    faClock = faClock;
    faUser =  faUser;
    faBars = faBars;
    faTag = faTag;

    todo: Todo;

    constructor(
        private dialogRef: DialogRef<OutputData>,
        @Inject(DIALOG_DATA) data: InputData
    ) {
        this.todo = data.todo;
    }

    onClose() {
        // Return data when modal is closed
        this.dialogRef.close({
            rta: true
        });
    }

}
