import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivityListComponent} from './activity-list/activity-list.component';
import {NewActivityComponent} from './new-activity/new-activity.component';

const routes: Routes = [
  {path: 'new', component: NewActivityComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ActivityListComponent},
];

@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class ActivityRoutingModule {
}
