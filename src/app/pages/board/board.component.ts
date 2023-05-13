import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: []
})
export class BoardComponent implements OnInit {

    todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
    doing = ['Get up', 'Brush teeth', 'Check e-mail', 'Walk dog'];
    done = ['Take a shower', 'Take out the garbage', 'Do the laundry'];

    columns = [
        { name: 'To Do', items: this.todo },
        { name: 'Doing', items: this.doing },
        { name: 'Done', items: this.done },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    drop(e: CdkDragDrop<string[]>) {
        if (e.container === e.previousContainer) return moveItemInArray(e.container.data, e.previousIndex, e.currentIndex);
        transferArrayItem(e.previousContainer.data, e.container.data, e.previousIndex, e.currentIndex);
    }

    onAddColumn() {
        this.columns.push({ name: 'New Column', items: [] });
    }

}
