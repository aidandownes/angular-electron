import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { NewActivityComponent } from './new-activity/new-activity.component';
import { ActivityListComponent } from './activity-list/activity-list.component';


@NgModule({
  declarations: [
    NewActivityComponent,
    ActivityListComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
