import {Pipe, PipeTransform} from '@angular/core';
import {Duration} from 'luxon';

@Pipe({name: 'timestamp'})
export class TimestampPipe implements PipeTransform {
  transform(value: string): string {
    const d = Duration.fromISO(value);
    return d.toFormat('mm:ss');
  }
}
