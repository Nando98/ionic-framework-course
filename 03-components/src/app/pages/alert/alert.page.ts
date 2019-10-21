import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    title: string;

    constructor(private alertCtrl: AlertController) {
        this.title = 'Alert Page';
    }

    ngOnInit() {
    }

    async presentAlert() {
        const alert = await this.alertCtrl.create({
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        console.log('Confirm Okay');
                    }
                }
            ]
        });
        await alert.present();
    }

    async presentAlertPrompt() {
        const alert = await this.alertCtrl.create({
            header: 'Put a new title',
            inputs: [
                {
                    name: 'newTitle',
                    type: 'text',
                    placeholder: 'This is an example'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: (data: any) => {
                        this.title = data.newTitle;
                    }
                }
            ]
        });
        await alert.present();
    }

}
