import {Pipe, PipeTransform} from '@angular/core';
import {Duration} from 'luxon';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: string): string {
    const d = Duration.fromISO(value);
    return d.toHuman();
  }
}
