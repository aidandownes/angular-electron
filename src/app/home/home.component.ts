import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';

import * as SessionActions from '../actions/session.actions';
import {AddSessionComponent} from '../dialogs/add-session/add-session.component';
import {Session} from '../models/session.model';
import * as fromSessionSelectors from '../selectors/session.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sessionIds$ = this.store.select(fromSessionSelectors.selectSessionIds);

  constructor(
      private router: Router, private store: Store,
      private modalService: NgbModal) {}

  ngOnInit(): void {
    const sessions: Session[] = [
      {id: '1', title: 'Deep Dive', duration: 'PT55M'},
      {id: '2', title: 'Quick think', duration: 'PT25M'},
      {id: '3', title: 'Break', duration: 'PT5M'}
    ];

    this.store.dispatch(SessionActions.loadSessions({sessions}))
  }

  openAddModal() {
    this.modalService.open(
        AddSessionComponent, {ariaLabelledBy: 'modal-basic-title'});
  }
}
