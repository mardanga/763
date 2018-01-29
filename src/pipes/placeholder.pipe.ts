import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value:string, textoDefault: string ): string {
    return value ? value.toUpperCase() : textoDefault.toUpperCase();
  }
}
