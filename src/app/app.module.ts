import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivsionComponent } from './divsion/divsion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { XlsxComponent } from './xlsx/xlsx.component';

@NgModule({
  declarations: [
    AppComponent,
    DivsionComponent,
    XlsxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  exports :[ DivsionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
