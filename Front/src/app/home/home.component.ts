import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '../Services/user.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
    
    }
}