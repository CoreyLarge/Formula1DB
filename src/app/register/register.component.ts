import {Component, OnInit} from '@angular/core';
import {WebService} from '../web.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm;

    constructor(private webService: WebService, private formBuilder: FormBuilder, private router: Router) {
        this.registerForm = formBuilder.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.registerForm.value);
        this.webService.register(this.registerForm.value);
        this.registerForm.reset();
    }
}
