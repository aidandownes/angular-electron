import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HomeComponent],
  imports:
      [CommonModule, SharedModule, HomeRoutingModule, NgbModule, DialogsModule]
})
export class HomeModule {
}

import {SharedModule} from '../shared/shared.module';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DialogsModule} from '../dialogs/dialogs.module';
