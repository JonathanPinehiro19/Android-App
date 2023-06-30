import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { E404Component } from './pages/e404/e404.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent,
    E404Component
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
