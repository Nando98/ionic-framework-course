import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {Componente} from '../../intefaces/instefaces';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

    components: Observable<Componente[]>;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
      this.components = this.dataService.getMenuOptions();
    }

}
