import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service'
import { User } from '../../../../../../libs/shared/src/models/user';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: User = new User();
    error = '';

    ngOnInit() {
    }

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.userService.create(this.model)
            .subscribe(
            data => {
                // set success message and pass true paramater to persist the message after redirecting to the login page
                this.router.navigate(['/login']);
            },
            error => {
                this.error = error.statusText;
                console.log(error);
            });
    }
}

