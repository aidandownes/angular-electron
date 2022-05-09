import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AddSessionComponent} from './add-session/add-session.component';



@NgModule({
  declarations: [AddSessionComponent],
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  exports: [AddSessionComponent]
})
export class DialogsModule {
}
