import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../intefaces/instefaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    getUsers() {
        const URL = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(URL);
    }

    getMenuOptions() {
        return this.http.get<Componente[]>('/assets/data/menu.json');
    }
}
