import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GroupManagePage } from '../group-manage/group-manage';
import { TabsPage } from '../tabs/tabs';
import { CalendarPage } from '../calendar/calendar';
import { CheckInPage } from '../check-in/check-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  groupManagePage = GroupManagePage;
  tabPage = TabsPage;
  calendarPage = CalendarPage;
  checkinPage = CheckInPage;
  constructor(public navCtrl: NavController ) {

  }
  

}
