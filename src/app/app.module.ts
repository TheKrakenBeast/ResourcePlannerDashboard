/* Angular imports */
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

/* Charts & table imports */
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {JSONTableModule} from 'angular-json-table';

/* ibm carbon-design imports */
import {UIShellModule} from 'carbon-components-angular';
import {Notification20Module} from '@carbon/icons-angular/lib/notification/20';
import {UserAvatar20Module} from '@carbon/icons-angular/lib/user--avatar/20';
import {AppSwitcher20Module} from '@carbon/icons-angular/lib/app-switcher/20';

/* app imports */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardOneComponent } from './dashboard/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './dashboard/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './dashboard/dashboard-three/dashboard-three.component';
import { DashboardFourComponent } from './dashboard/dashboard-four/dashboard-four.component';
import { AdvPieChartComponent } from './charts/adv-pie-chart/adv-pie-chart.component';
import { GuageChartComponent } from './charts/guage-chart/guage-chart.component';
import { HeatMapComponent } from './charts/heat-map/heat-map.component';
import { HorizontalBarChartComponent } from './charts/horizontal-bar-chart/horizontal-bar-chart.component';
import { VerticalBarChartComponent } from './charts/vertical-bar-chart/vertical-bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { NumberCardsComponent } from './charts/number-cards/number-cards.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { PieGridComponent } from './charts/pie-grid/pie-grid.component';
import { TableOneComponent } from './tables/table-one/table-one.component';
import { TableTwoComponent } from './tables/table-two/table-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardOneComponent,
    DashboardTwoComponent,
    DashboardThreeComponent,
    DashboardFourComponent,
    AdvPieChartComponent,
    GuageChartComponent,
    HeatMapComponent,
    HorizontalBarChartComponent,
    VerticalBarChartComponent,
    LineChartComponent,
    NumberCardsComponent,
    PieChartComponent,
    PieGridComponent,
    TableOneComponent,
    TableTwoComponent,
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
    HttpClientModule,
    JSONTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
