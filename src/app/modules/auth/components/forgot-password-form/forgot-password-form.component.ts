import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ResponseStatus } from 'src/app/models/response-status.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html'
})
export class ForgotPasswordFormComponent {

    form = this.formBuilder.nonNullable.group({
        email: ['', [Validators.email, Validators.required]],
    });
    status: ResponseStatus = 'init';
    emailSent = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
    ) { }

    sendLink() {
        if (this.form.valid) {
            this.status = 'loading';
        const { email } = this.form.getRawValue();

        this.authService.recoveryPassword(email).subscribe(data => {
            this.status = 'success';
            this.emailSent = true;
        },
        (error) => {
            this.status = 'failed';
        })

        } else {
            this.form.markAllAsTouched();
        }
    }

}
