import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    
    transform(arrayPipe: any[], text: string, column: string): any[] {
        if (text === '') {
            return arrayPipe;
        }
        text = text.toLowerCase();
        return arrayPipe.filter((item) => {
            return item[column].toLowerCase().includes(text);
        });
    }
    
}
