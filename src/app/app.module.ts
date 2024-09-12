import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { DataModule } from './data/data.module';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MovieSearchComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    DataModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
