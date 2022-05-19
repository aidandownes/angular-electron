import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import * as fromSessionSelectors from '../../../selectors/session.selectors';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionCardComponent implements OnInit {
  @Input('session-id') sessionId: string;

  session$ = this.store.select(fromSessionSelectors.selectSessionsMap)
                 .pipe(map(sessions => sessions[this.sessionId]));

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
