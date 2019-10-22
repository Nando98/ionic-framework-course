import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

    names = '';

    user = {
      email: '',
      password: ''
    };

    constructor() {
    }

    ngOnInit() {
    }

    onSubmitTemplate() {
        console.log('On Submit Template');
        console.log(this.user);
    }
}
