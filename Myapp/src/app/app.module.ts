import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GroupManagePage } from '../pages/group-manage/group-manage';
import { TabsPage } from '../pages/tabs/tabs';
import { StudentDetailPage } from '../pages/student-detail/student-detail';
import { CalendarPage } from '../pages/calendar/calendar';
import { CalendarViewPage } from '../pages/calendar-view/calendar-view'
import { CheckInPage } from '../pages/check-in/check-in'
import { CheckInStdPage } from '../pages/check-in-std/check-in-std'

import { TserProvider } from '../providers/tser/tser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GroupManagePage,
    TabsPage,
    StudentDetailPage,
    CalendarPage,
    CalendarViewPage,
    CheckInPage,
    CheckInStdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GroupManagePage,
    TabsPage,
    StudentDetailPage,
    CalendarPage,
    CalendarViewPage,
    CheckInPage,
    CheckInStdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TserProvider
  ]
})
export class AppModule {}
