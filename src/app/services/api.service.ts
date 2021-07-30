import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserModel } from "../models/user.model";
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    user: UserModel;
    environment: any;
    token: string;

    constructor(
        public http: HttpClient,  
        public storage: Storage,
        public router: Router,
    ) {
        this.environment = environment;
        this.user = new UserModel();
        this.token = '';
        this.init();
    }

    async init() {
        this.storage = await this.storage.create();
    }

    async appInitialize(): Promise<Observable<UserModel>> {
        const token = await this.storage.get('token');
        if (token) {
            this.api_v1_user_read()
            .then(response => {
                return true;
            })
            .catch(error => {
                return false;
            })
        }
        return of(this.user);
    }

    is_user_logged(): boolean {
        if (typeof this.user.name == 'undefined') {
            return false;
        } else {
            return true;
        }
    }

    api_v1_user_read(): Promise<any> {
        return this.http
            .post(`${environment.apiUrl}/api/v1/user/read`, 
            {},
            {headers : new HttpHeaders({ 'Content-Type': 'text/plain' }), responseType: 'text'}
            )
            .toPromise();
    }
}