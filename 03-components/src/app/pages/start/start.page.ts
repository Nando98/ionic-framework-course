import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-start',
    templateUrl: './start.page.html',
    styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

    components: Componente[] = [
        {
            icon: 'american-football',
            name: 'Action Sheet',
            redirectTo: '/action-sheet'
        },
        {
            icon: 'appstore',
            name: 'Alert',
            redirectTo: '/alert'
        },
        {
            icon: 'beaker',
            name: 'Avatar',
            redirectTo: '/avatar'
        },
        {
            icon: 'radio-button-on',
            name: 'Buttons',
            redirectTo: '/buttons'
        },
        {
            icon: 'card',
            name: 'Cards',
            redirectTo: '/cards'
        },
        {
            icon: 'checkmark-circle-outline',
            name: 'Check',
            redirectTo: '/check'
        },
        {
            icon: 'calendar',
            name: 'DateTime',
            redirectTo: '/date-time'
        },
        {
            icon: 'car',
            name: 'Fabs',
            redirectTo: '/fab'
        },
        {
            icon: 'grid',
            name: 'Grids',
            redirectTo: '/grid'
        },
        {
            icon: 'infinite',
            name: 'Infinite Scroll',
            redirectTo: '/infinite-scroll'
        },
        {
            icon: 'hammer',
            name: 'Input Forms',
            redirectTo: '/input'
        },
        {
            icon: 'list',
            name: 'Sliding List',
            redirectTo: '/list'
        },
        {
            icon: 'reorder',
            name: 'Reorder List',
            redirectTo: '/list-reorder'
        },
        {
            icon: 'refresh-circle',
            name: 'Loading',
            redirectTo: '/loading'
        },
        {
            icon: 'refresh-circle',
            name: 'Loading',
            redirectTo: '/loading'
        }
    ];

    constructor( private menuCtrl: MenuController) {
    }

    ngOnInit() {
    }

    toggleMenu() {
        this.menuCtrl.toggle();
    }

}

interface Componente {
    icon: string;
    name: string;
    redirectTo: string;
}
