import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'efectorFilter'
})
export class EfectorFilterPipe implements PipeTransform {

  transform(dashboardItems: any[], filterText: string): any[] {
    return dashboardItems.filter(item => item.servidor.toLowerCase().includes(filterText.toLowerCase()))
  }

}
