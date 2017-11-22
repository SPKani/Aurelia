import { inject } from 'aurelia-framework';
import { WebAPI } from '../web-api';
import { Router } from 'aurelia-router';

@inject(WebAPI, Router)
export class Grid {
    users: any;

    filters = [
        { value: true, custom: this.inactiveFilter }
    ];

    pageSize = 10;

    constructor(private api: WebAPI, private router: Router) {
        this.api.getUsers().then(contacts => {
            this.users = contacts;
            this.users.forEach(user => {
                user.detailUrl = this.router.generate('detail', { id: user.id });
            });
        });
    }

    inactiveFilter(filterValue, row) {
        return filterValue || row.isActive;
    }

    nameLength(row) {
        return row.name.length;
    }
}