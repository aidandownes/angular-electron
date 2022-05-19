import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {TranslateModule} from '@ngx-translate/core';

import {StopwatchEffects} from '../effects/stopwatch.effects';

import {PageNotFoundComponent} from './components/';
import {SessionCardComponent} from './components/session-card/session-card.component';
import {StopwatchComponent} from './components/stopwatch/stopwatch.component';
import {WebviewDirective} from './directives/';
import {DurationPipe} from './pipes/duration.pipe';
import {TimestampPipe} from './pipes/timestamp.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent, WebviewDirective, SessionCardComponent, DurationPipe,
    StopwatchComponent, TimestampPipe
  ],
  imports: [
    CommonModule, TranslateModule, FormsModule, RouterModule,
    EffectsModule.forFeature([StopwatchEffects])
  ],
  exports: [
    TranslateModule, WebviewDirective, FormsModule, SessionCardComponent,
    DurationPipe, StopwatchComponent
  ]
})
export class SharedModule {
}
