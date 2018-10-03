import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: ScheduleComponent
      },
      {
        path: '**',
        component: ScheduleComponent
      }
    ]),
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent] // local development
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ejs-framework', <any>el);
  }
}
