import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

    faPen = faPen;
    faEye = faEye;
    faEyeSlash = faEyeSlash;
    showPassword = false;
    status: string = 'init';

    form = this.formBuilder.nonNullable.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [ Validators.required, Validators.minLength(6)]],
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router
    ) { }

    doLogin() {
        if (this.form.valid) {
        this.status = 'loading';
        const { email, password } = this.form.getRawValue();
        // TODO
        } else {
        this.form.markAllAsTouched();
        }
    }

}
