import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {PageNotFoundComponent} from './components/';
import {SessionCardComponent} from './components/session-card/session-card.component';
import {WebviewDirective} from './directives/';
import {DurationPipe} from './pipes/duration.pipe';

@NgModule({
  declarations: [
    PageNotFoundComponent, WebviewDirective, SessionCardComponent, DurationPipe
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    TranslateModule, WebviewDirective, FormsModule, SessionCardComponent,
    DurationPipe
  ]
})
export class SharedModule {
}
