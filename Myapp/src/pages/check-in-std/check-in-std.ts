import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser'
import moment from 'moment';
/**
 * Generated class for the CheckInStdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-in-std',
  templateUrl: 'check-in-std.html',
})
export class CheckInStdPage {
  course_id:any;
  group_id:any;
  date2:any;
  day:any;
  month:any;
  year:any;
  subject:any[];
  subject_id:any;
  time:any[];
  table_id:any;
  stdRegist:any[];
  checkinData:any[];
  checkinStd:any[];
  check:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public TserProvider: TserProvider) {
  }

  ionViewDidLoad() {
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
    console.log('ionViewDidLoad CheckInStdPage');
    this.course_id = this.navParams.get('course_id');
    this.group_id = this.navParams.get('group_id');
    this.TserProvider.get_subject(this.course_id).subscribe((response) => {
      this.subject = response;
      console.log(response);
    });
  }
  onDateChange(date:any){
    this.subject_id = null;
    this.table_id=null;
    this.stdRegist=null;
    this.subject=null;
    this.time=null;
    this.day = date.day;
    this.month = date.month;
    this.year = date.year;
    this.date2 = this.year+"-"+this.month+"-"+this.day;
    console.log(date);
    console.log(this.date2);
    console.log(moment(this.date2).format('YYYY-MM-DD').toString());
    
      this.TserProvider.get_subject(this.course_id).subscribe((response) => {
        this.subject = response;
        console.log(response);
      });     
  }
  onSubChange(value:any){
    this.stdRegist=null;
    this.subject_id = value;
    console.log(value);
    console.log(this.group_id);
    this.table_id=null;
    this.TserProvider.get_time(this.group_id,this.subject_id).subscribe((response) => {
      this.time = response;
      console.log(response);
    });
    
  }
  onTimeChange(value:any){
    this.table_id = value;
    if(this.table_id!=null){
      this.TserProvider.get_StdRegist(this.group_id,this.table_id).subscribe((response) => {
        this.stdRegist = response;
        this.stdRegist.forEach(function (value:any) {
          if(value.spc_checkin_date != null){
            value.spc_checkin_date = value.spc_checkin_date.substring(0,10);
            console.log(value.spc_checkin_date);
          }      
        });
        console.log(response);
      });
    }
    this.TserProvider.get_Checkin().subscribe((response) => {
      this.checkinData = response;
      this.checkinData.forEach(function (value) {
        if(value.spc_checkin_date != null){
          value.spc_checkin_date = value.spc_checkin_date.substring(0,10);
          console.log(value.spc_checkin_date);
        }      
      }); 
      console.log(response);     
    });
    console.log(this.table_id);
    //this.check_std();
  }
  check_std(){
      //ฟังก์ชั่นวนลูปเช็คเข้าเรียน  
      this.checkinStd = null;
      if(!(this.stdRegist == null || this.checkinData == null)){
        this.stdRegist.forEach(function (value:any) {
          this.checkinData.forEach(function (value2:any) {      
            if(value.spc_regist_id == value2.spc_checkin_regist_id && value.spc_time_table_id == value2.spc_checkin_time_table && value.spc_student_id == value2.spc_checkin_student_id && value2.spc_checkin_date == this.date2){
              this.check = 1;
              this.checkinStd.push(1);
          }
          });  
          if(this.check==0){
            this.checkinStd.push(0);
  
          }
          this.check = 0;
        });
      }else{
        console.log("null data")
      }
      
      console.log("check "+this.check);
  }
  checkin(regist_id:any,std_id:any,table_id:any){
    console.log(regist_id);
    console.log(std_id);
    console.log(table_id);
    let time =  moment().format("hh:mm:ss") ;
    time = time.substring(0,8);
    console.log(time);
    console.log(this.date2);
    this.TserProvider.add_Checkin(regist_id,std_id,table_id,time,this.date2).subscribe((response) => {
      console.log(response);
    });
    setTimeout(() => {
      this.getstd()
    },500);
  }
  getstd(){
    this.TserProvider.get_StdRegist(this.group_id,this.table_id).subscribe((response) => {
      this.stdRegist = response;
      this.stdRegist.forEach(function (value) {
        if(value.spc_checkin_date != null){
          value.spc_checkin_date = value.spc_checkin_date.substring(0,10);
          console.log(value.spc_checkin_date);
        }      
      });
      console.log(response);
    });
    this.TserProvider.get_Checkin().subscribe((response) => {
      this.checkinData= response;
      if(this.checkinData == null){
        console.log("NULL");
      }else{
        console.log("Not null");
      }
      this.checkinData.forEach(function (value) {
        if(value.spc_checkin_date != null){
          value.spc_checkin_date = value.spc_checkin_date.substring(0,10);
          console.log(value.spc_checkin_date);
        }      
      });
      console.log(response);
      
    });
    //this.check_std();
  }
}
