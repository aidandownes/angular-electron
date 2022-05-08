import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';

import * as fromApp from '../reducers';
import * as SessionActions from '../session.actions';
import {Session} from '../session.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sessions$ = this.store.select(fromApp.selectSessions);

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

  getSessionId(index: number, session: Session): string {
    return session.id;
  }

  async openAddModal(content) {
    const modalRef =
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    const result = await modalRef.result;
  }
}
