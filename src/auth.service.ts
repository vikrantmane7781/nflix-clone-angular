declare var google:any;

import { Injectable, inject } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})

export class AuthService{
    private router = inject(Router);
    constructor(){

    }
    SignOut(){
        google.accounts.id.disableAutoSelect();
        this.router.navigate(['/'])
    }
}