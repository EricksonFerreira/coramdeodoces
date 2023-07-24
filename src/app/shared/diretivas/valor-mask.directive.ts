import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[valorMask]'
})
export class ValorMaskDirective {

  @Input() currencySymbol: string = 'R$';

  constructor(private elementRef: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '');
    const formattedValue = this.formatValue(value);
    input.value = this.currencySymbol + formattedValue;
  }

  formatValue(value: string): string {
    // Implemente a lógica de formatação de acordo com a máscara desejada
    // Por exemplo, você pode usar regex para adicionar separadores de milhar e casas decimais
    // Exemplo: 12345.67 -> 12.345,67
    // Substitua o exemplo abaixo pela lógica de formatação adequada


    const decimalSeparator = ',';
    const thousandSeparator = '.';

    const parts = value.split('.');
    const integerPart = parts[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${thousandSeparator}`);
    const decimalPart = parts[1] ? decimalSeparator + parts[1] : '';

    return integerPart + decimalPart;
  }
}
