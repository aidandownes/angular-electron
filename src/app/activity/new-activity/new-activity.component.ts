import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  title: string;
  duration: string;

  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('title');
      this.duration = params.get('duration');
      this.cdRef.markForCheck();
    });
  }
}
