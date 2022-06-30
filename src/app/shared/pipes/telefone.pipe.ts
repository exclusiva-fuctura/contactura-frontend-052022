import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(num: number) {
    const tel = num.toString();
    // so recebe telefone com no minimo 10 caracteres 
    if (tel.length < 10) {
      return tel;
    }

    // remove o - e os () se estiver na string
    const value = tel.toString().trim().replace(/([-()])/mg, '');

    let ddd = value.substring(0,2);    
    let part1 = value.substring(2,6);
    let part2 = value.substring(6);
    if (value.length > 10) {
      part1 = value.substring(2,7);
      part2 = value.substring(7);
    }

    return `(${ddd}) ${part1}-${part2}`;
  }

}
