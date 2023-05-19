import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {


    constructor(
        private authService: AuthService,
    ) {
        this.authService.getProfile().subscribe();
    }
}
