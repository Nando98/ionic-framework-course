import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.page.html',
    styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    @Input() name;
    @Input() country;

    constructor(private modalCtrl: ModalController) {
    }

    ngOnInit() {
    }

    salirSinArgumentos() {
        this.modalCtrl.dismiss();
    }

    salirConArgumentos() {
      this.modalCtrl.dismiss({
        name: 'Mathias',
        country: 'EE.UU'
      });
    }

}
