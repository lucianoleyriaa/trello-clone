import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

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

    // menuItems = [
    //     {
    //         label: 'item1',
    //         items: [
    //             {
    //                 label: 'item 1.1',
    //                 items: [],
    //             },
    //             {
    //                 label: 'item 1.2',
    //                 items: [],
    //             }
    //         ]
    //     },
    //     {
    //         label: 'item2',
    //         items: [
    //             {
    //                 label: 'item 2.1',
    //                 items: [{
    //                     label: 'item 2.1.1'
    //                 }]
    //             },
    //         ]
    //     },
    //     {
    //         label: 'item3',
    //         items: [
    //             {
    //                 label: 'item 3.1',
    //                 items: [],
    //             },
    //             {
    //                 label: 'item 3.2',
    //                 items: [],
    //             },
    //             {
    //                 label: 'item 3.3',
    //                 items: [],
    //             }
    //         ]
    //     },

    // ]

  constructor() { }

  ngOnInit(): void {
  }

}
