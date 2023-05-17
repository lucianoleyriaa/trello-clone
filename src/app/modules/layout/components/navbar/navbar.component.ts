import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

    faBell = faBell;
    faInfoCircle = faInfoCircle;
    isOpen = false;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {

    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}
