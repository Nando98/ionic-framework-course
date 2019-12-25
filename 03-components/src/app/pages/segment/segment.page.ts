import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from "@ionic/angular";
import {DataService} from "../../services/data.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
    
    /*
    La propiedad "static" en un booleana para resolver los resultados de la consulta antes/después de la detección de cambios:
    static : True para resolver los resultados de la consulta antes de que se ejecute la detección de cambios.
    static : False para resolver los resultados de la consulta después de que se ejecute la detección de cambios.
     */
    
    @ViewChild(IonSegment, {static: true}) ionSegment: IonSegment;
    
    superHeroes: Observable<any>;
    publisher: string = '';
    
    constructor(private dataService: DataService) {
    }
    
    ngOnInit() {
        this.ionSegment.value = 'Todos';
        this.superHeroes = this.dataService.getSuperHeroes();
    }
    
    segmentChanged(event: any) {
        const valueSegment = event.detail.value;
        if (valueSegment === 'Todos') {
            return this.publisher = '';
        }
        return this.publisher = valueSegment;
    }
}
