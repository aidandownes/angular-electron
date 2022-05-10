import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import * as SessionActions from '../../actions/session.actions';
import {Session} from '../../models/session.model';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSessionComponent implements OnInit {
  addSessionForm = this.fb.group({
    title: [''],
    duration: [25],
  })

  constructor(
      private activeModal: NgbActiveModal, private fb: FormBuilder,
      private store: Store) {}

  ngOnInit(): void {}

  private getSession(): Session {
    const title = this.addSessionForm.value.title;
    // convert to ISO string.
    const duration = `PT${this.addSessionForm.value.duration}M`;
    // TODO: generate id
    const id = '' + Date.now();

    return {
      id,
      title,
      duration,
    };
  }

  onSubmit() {
    const session = this.getSession();
    this.store.dispatch(SessionActions.addSession({session}));
    this.activeModal.close();
  }
}
