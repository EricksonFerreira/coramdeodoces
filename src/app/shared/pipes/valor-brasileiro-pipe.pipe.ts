import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorBrasileiro'
})
export class ValorBrasileiroPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) return '';


    const valorFormatado = value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).replace('.', ',');

    return `R$ ${valorFormatado}`;
  }
}
