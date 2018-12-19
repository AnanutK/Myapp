import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';
import { CalendarViewPage } from '../calendar-view/calendar-view'
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  course: course_data[];
  course_id: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public TserProvider: TserProvider,public alertController:AlertController) {
  }
  ngOnInit(){
    console.log("HOOOOO")
    this.TserProvider.get_course().subscribe((response) => {
      this.course = response;
      console.log(response);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }
  loadCalendar(){
    if(this.course_id == null){
      let  alert = this.alertController.create({
        title:"กรุณาเลือกคอร์ส",
        buttons:[
         { text:"ตกลง"} 
        ]
      })
      alert.present()
    }else{
      let data ={
        course_id:this.course_id
      }
      this.navCtrl.push(CalendarViewPage,data)
    }
  }
  onCourseChange(value:any){
    console.log(value);
    this.course_id = value;
  }
}
interface course_data{
  spc_course_id: string;
  spc_course_name: string;
}