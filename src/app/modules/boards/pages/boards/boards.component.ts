import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

import { MeService } from 'src/app/services/me.service';
import { Board } from 'src/app/models/Board.model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
})
export class BoardsComponent implements OnInit {

    faBox = faBox;
    faWaveSquare = faWaveSquare;
    faClock = faClock;
    faTrello = faTrello;
    faAngleUp = faAngleUp;
    faAngleDown = faAngleDown;
    faHeart = faHeart;
    faBorderAll = faBorderAll;
    faUsers = faUsers;

    boards: Board[] = [];

    constructor(
        private meService: MeService,
    ) { }

    ngOnInit(): void {
        this.meService.getMeBoards().subscribe(data => {
            this.boards = data;
        });
    }

}
