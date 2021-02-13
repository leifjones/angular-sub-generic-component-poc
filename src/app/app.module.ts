import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent, HeroDetailComponent, NotableEventListItemComponent, VerticalListItemComponent, VerticalListComponent } from './components';
import { DriverService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    VerticalListItemComponent,
    VerticalListComponent,
    NotableEventListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
