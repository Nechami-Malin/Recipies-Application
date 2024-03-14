import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationFormat',
  standalone: true
})

export class DurationFormatPipe implements PipeTransform {
  transform(minutes: number): string {
    //alert(this.transform)
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    let durationString = '';

    if (hours > 0) {
      durationString += hours + ' שעות ';
    }
    
    if (remainingMinutes > 0) {
      durationString += remainingMinutes + ' דקות';
    }

    return durationString;
  }
}
