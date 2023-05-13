import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: []
})
export class BoardComponent implements OnInit {

    tasks: Task[] = [
        { id: '1', name: 'Refactorizar' },
        { id: '1', name: 'Crear' },
        { id: '1', name: 'Deployar' },
        { id: '1', name: 'Testear' },
    ]

    todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
    doing = ['Get up', 'Brush teeth', 'Check e-mail', 'Walk dog'];
    done = ['Take a shower', 'Take out the garbage', 'Do the laundry'];

    constructor() { }

    ngOnInit(): void {
    }

    drop(e: CdkDragDrop<string[]>) {
        if (e.container === e.previousContainer) return moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
        transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex);
    }

}
