import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { AuthService } from 'src/app/services/auth.service';
import { ResponseStatus } from 'src/app/models/response-status.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

    faPen = faPen;
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    showPassword = false;
    status: ResponseStatus = 'init';

    form = this.formBuilder.nonNullable.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [ Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute
    ) {
        this.activatedRoute.queryParamMap.subscribe(params => {
            const email = params.get('email');
            if (email) this.form.controls.email.setValue(email);
        });
    }

    doLogin() {
        if (this.form.valid) {
            this.status = 'loading';
            const { email, password } = this.form.getRawValue();

            this.authService.login(email, password).subscribe(response => {
                    this.status = 'success';
                    this.router.navigateByUrl('/app/boards');
                },
                (error) => {
                    this.status = 'failed';
                }
            )
        } else {
            this.form.markAllAsTouched();
        }
    }

}
