import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MATERIAL_COMPATIBILITY_MODE } from '@angular/material';

import { OverlayContainer } from '@angular/cdk/overlay';
import { MaterialImportModule } from './material-import.module';

import { AppComponent } from './components/app.component';
import { AboutComponent, DescriptionDialog } from './components/about.component';
import { StreamComponent } from './components/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StreamComponent,
    DescriptionDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialImportModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
  ],
  entryComponents: [],
  bootstrap: [AppComponent, AboutComponent, StreamComponent, DescriptionDialog]
})
export class AppModule 
{
    constructor(overlayContainer: OverlayContainer) 
    {
        overlayContainer.getContainerElement()
            .classList.add('app-dark-theme');
    }
}