import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList} from '@ionic/angular';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    // Hacemos una refrencia al IonList utilizando un hash myList en el elemento ion-list
    // Esto permite obtener todos los methods que tiene la lista
    @ViewChild('myList', {static: false}) myList: IonList;
    userList: Observable<any>;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.userList = this.dataService.getUsers();
    }

    favorite(user) {
        this.myList.closeSlidingItems();
        console.log(user);
    }

    share(user) {
        this.myList.closeSlidingItems();
        console.log(user);
    }

    delete(user) {
        console.log(user);
    }
}
