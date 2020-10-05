import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopNavegationComponent } from './components/top-navegation/top-navegation.component';
import { AppRoutingModule } from './app.routing.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


import { NgxPaginationModule } from 'ngx-pagination';

import { CidadesComponent } from './components/cidades/cidades.component';
import { HttpClientModule } from '@angular/common/http';
import { CidadesSearchComponent } from './components/cidades/cidades-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadesComponent,
    TopNavegationComponent,
    CidadesSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    NgxPaginationModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
