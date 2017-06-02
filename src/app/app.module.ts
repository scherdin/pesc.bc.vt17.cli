import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
