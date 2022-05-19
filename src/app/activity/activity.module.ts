import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {ActivityListComponent} from './activity-list/activity-list.component';
import {ActivityRoutingModule} from './activity-routing.module';
import {NewActivityComponent} from './new-activity/new-activity.component';


@NgModule({
  declarations: [NewActivityComponent, ActivityListComponent],
  imports: [CommonModule, ActivityRoutingModule, SharedModule]
})
export class ActivityModule {
}
