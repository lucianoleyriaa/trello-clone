import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/models/User.model';

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
    user!: User | null;

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.authService.user$.subscribe(user => {
            this.user = user;
        });
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}
