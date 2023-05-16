import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { CustomValidators } from '@utils/validators';
import { ResponseStatus } from 'src/app/models/response-status.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recovery-form',
  templateUrl: './recovery-form.component.html',
})
export class RecoveryFormComponent {
    form = this.formBuilder.nonNullable.group(
        {
        newPassword: ['', [Validators.minLength(6), Validators.required]],
        confirmPassword: ['', [Validators.required]],
        },
        {
        validators: [
            CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
        ],
        }
    );
    status: ResponseStatus = 'init';
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    showPassword = false;
    token: string = '';
    error: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {
        this.activatedRoute.queryParamMap.subscribe(params => {
            const token = params.get('token');
            if (token) {
                this.token = token;
            } else {
                this.router.navigate(['/login']);
            }
        })
    }

    recovery() {
        this.error = false;
        if (this.form.valid) {
            this.status = 'loading';
            const { newPassword } = this.form.getRawValue();

            this.authService.changePassword(this.token, newPassword).subscribe(data => {
                this.status = 'success';
                this.router.navigate(['/login']);
            },
            (error) => {
                this.status = 'failed';
                this.error = true;
            });

        } else {
            this.form.markAllAsTouched();
        }
    }
}
