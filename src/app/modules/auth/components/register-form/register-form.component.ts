import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
import { ResponseStatus } from 'src/app/models/response-status.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
    checkUser = this.formBuilder.nonNullable.group({
        email: ['', [Validators.email, Validators.required]]
    });

    form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]],
    confirmPassword: ['', [Validators.required]],
    }, {
        validators: [ CustomValidators.MatchValidator('password', 'confirmPassword') ]
    });
    status: ResponseStatus = 'init';
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    showPassword = false;
    errorMessage: string = '';
    showRegisterForm: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService,
    ) {}

    register() {
        if (this.form.valid) {
            this.status = 'loading';
            this.errorMessage = '';
            const { name, email, password } = this.form.getRawValue();

            this.authService.signup(name, email, password).subscribe(() => {
                this.status = 'success';
                this.router.navigate(['/app/boards']);
            },
            (error) => {
                this.status = 'failed';
                if (error.error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
                    this.errorMessage = "The user already exists!"
                }
            });

        } else {
            this.form.markAllAsTouched();
        }
    }

    checkIfIsAvailable() {
        if (this.checkUser.valid) {
            this.status = 'loading';
            const { email } = this.checkUser.getRawValue();

            this.authService.isAvailable(email).subscribe(data => {
                this.status = 'success';
                if (!data.isAvailable) {
                    this.router.navigate(['/login'], { queryParams: { email } });
                } else {
                    this.form.controls.email.setValue(email);
                    this.showRegisterForm = true;
                }
            },
            (error) => {
                this.status = 'failed';
            })

        } else {
            this.checkUser.markAllAsTouched();
        }
    }
}
