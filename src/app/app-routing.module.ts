import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DetailRoutingModule} from './detail/detail-routing.module';
import {HomeRoutingModule} from './home/home-routing.module';
import {PageNotFoundComponent} from './shared/components';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'activity',
    loadChildren: () =>
        import('./activity/activity.module').then(m => m.ActivityModule)
  },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}),
    HomeRoutingModule, DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
