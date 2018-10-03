import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, ViewEncapsulation } from '@angular/core';

const SCHEDULE_DATA = [
  {
    id: 1,
    time: new Date('2018-10-03T19:15:00'),
    description: 'Plugins Are the Future - Web Components'
  },
  {
    id: 2,
    time: new Date('2018-10-03T19:15:00'),
    description: 'Elm: Frontend Engineering on Steroids'
  },
  {
    id: 3,
    time: new Date('2018-10-03T21:45:00'),
    description: 'Advanced React Design Patterns continued'
  }
];

@Component({
  selector: 'app-root',
  styleUrls: [
    './app.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <mat-toolbar color="primary">
        <mat-toolbar-row>
          <span>EgyptJS October - 2018</span>
        </mat-toolbar-row>
      </mat-toolbar>
      <div class="container">
        <table class="mat-elevation-z8">
          <thead>
            <tr>
              <th>Time</th>
              <th>Description</th>
              <th *ngIf="commentsEnabled"></th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of dataSource">
              <td>{{row.time | date: 'medium'}}</td>
              <td>{{row.description}}</td>
              <td *ngIf="commentsEnabled">
                <a routerLink="/comments/{{row.id}}">Comments</a>
              </td>
            </tr>
          </tbody>
        </table>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  dataSource = SCHEDULE_DATA;
  commentsEnabled = false;

  constructor(private cd: ChangeDetectorRef) {}

  @HostListener('window:enablePlugin', ['$event'])
  enablePlugin() {
    this.commentsEnabled = true;
    this.cd.detectChanges();
  }
}
