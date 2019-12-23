import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Componente} from '../../intefaces/instefaces';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-start',
    templateUrl: './start.page.html',
    styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

    components: Observable<Componente[]>;

    constructor(private menuCtrl: MenuController,
                private dataService: DataService) {
    }

    ngOnInit() {
        this.components = this.dataService.getMenuOptions();
    }

    toggleMenu() {
        this.menuCtrl.toggle();
    }

}

