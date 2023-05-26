import { Component } from '@angular/core';
import { ActivationEnd, Router, Event } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  public pageTitle!: string;
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event:ActivationEnd) => event.snapshot.data),
      )
      .subscribe(({pageTitle}) => {
          this.pageTitle = pageTitle;
          document.title = `Admin - ${pageTitle}`;
      });
  }
}
