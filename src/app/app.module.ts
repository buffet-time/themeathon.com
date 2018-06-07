import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { MaterialImportModule } from './material-import.module';

import { AppComponent } from './components/app.component';
import { StreamComponent, DescriptionDialog } from './components/stream.component';
import { EventsComponent } from './components/events.component';
import { GuidesComponent } from './components/guides.component';

const appRoutes: Routes = [
	{ path: '', component: StreamComponent },
  { path: 'events', component: EventsComponent },
  { path: 'guides', component: GuidesComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
	StreamComponent,
  EventsComponent,
  GuidesComponent,
	DescriptionDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialImportModule,
	BrowserAnimationsModule,
	RouterModule.forRoot(
		appRoutes
	  )
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [ DescriptionDialog ]
})
export class AppModule {
    constructor(overlayContainer: OverlayContainer) {
        overlayContainer.getContainerElement()
            .classList.add('app-dark-theme');
    }
}