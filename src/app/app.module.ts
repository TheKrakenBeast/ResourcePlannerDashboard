/* Angular imports */
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/* Ngx-charts imports */
import {NgxChartsModule} from '@swimlane/ngx-charts';

/* ibm carbon-design imports */
import {UIShellModule} from 'carbon-components-angular';
import {Notification20Module} from '@carbon/icons-angular/lib/notification/20';
import {UserAvatar20Module} from '@carbon/icons-angular/lib/user--avatar/20';
import {AppSwitcher20Module} from '@carbon/icons-angular/lib/app-switcher/20';

/* app imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    UIShellModule,
    Notification20Module,
    UserAvatar20Module,
    AppSwitcher20Module,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
