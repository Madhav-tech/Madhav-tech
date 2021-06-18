import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} name
   * @returns {any[]}
   */
  
  transform(items: any[], name: string): any[] {
    //console.log(items)
    if(!items)
        return [];
    if (name != '') {
        console.log("2");
        name = name.toLocaleLowerCase();

        return items.filter(it => {
          return it.first_name.toLocaleLowerCase().includes(name);
        });
      }
      return [];
   }
}