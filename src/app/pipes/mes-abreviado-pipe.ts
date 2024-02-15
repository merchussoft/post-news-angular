import {Pipe, PipeTransform} from "@angular/core";


@Pipe({standalone: true, name: 'MesAbreviadoPipe'})

export class MesAbreviadoPipe implements PipeTransform {
  transform(value: string): string {
    const mesesAbreviados = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];

    const fecha = new Date(value);
    const mesAbreviado = mesesAbreviados[fecha.getMonth()];

    return `${fecha.getDate()} ${mesAbreviado}, ${fecha.getFullYear()}`;
  }
}
