import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';

/**
 * Generated class for the CalendarViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar-view',
  templateUrl: 'calendar-view.html',
})
export class CalendarViewPage {
  group: group_data[];
  time: time_table[];
  course_id: any;
  group_id: any;
  day_id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public TserProvider: TserProvider,public alertController: AlertController) {
  }
  ngOnInit(){
    console.log("HOOOOO");
    
  }
  ionViewDidLoad() {
    this.course_id = this.navParams.get('course_id')
    this.TserProvider.get_group_byid(this.course_id).subscribe((response) => {
      this.group = response;
      console.log(response);
    });
  }
  change_day(value:any){
    this.day_id = value;
    this.time_table();
  }
  change_group(value:any){
    this.group_id = value;
    this.time_table();
  }
  time_table(){
    if(this.day_id == null || this.group_id == null){
        console.log("ERRORRRR")
    }else{
      this.TserProvider.get_timeTable(this.group_id,this.day_id).subscribe((response) => {
        this.time = response;
        console.log(response);
      });
    }
  }

}
interface group_data{
  spc_group_id: string;
  spc_group_name: string;
}
interface time_table{
  spc_subject_name_TH:string,
  spc_time_table_begin:string,
  spc_time_table_end:string
}
