import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'opTime'
})
export class OpTimePipe implements PipeTransform {

  transform(value: string): string {
    const times = value.split(':');
    if (parseInt(times[0], 10) >= 0 && parseInt(times[0], 10) < 12 ){
      return times[0] + ':' + times[1] + ' A.M.';
    }else if (parseInt(times[0], 10) == 12){
      return times[0] + ':' + times[1] + ' P.M.';
    } else {
      return (parseInt(times[0], 10) - 12) > 9 ?
      (parseInt(times[0], 10) - 12) + ':' + times[1] + ' P.M.' :
      '0' + (parseInt(times[0], 10) - 12) + ':' + times[1] + ' P.M.';
    }
  }

}
