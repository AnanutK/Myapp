import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser'
import { CheckInStdPage } from '../check-in-std/check-in-std'
/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-in',
  templateUrl: 'check-in.html',
})
export class CheckInPage {
  course_id:any;
  group_id:any;
  course: course_data[];
  group: group_data[];
  constructor(public navCtrl: NavController, public navParams: NavParams ,public TserProvider: TserProvider,public alertController: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckInPage');
  }
  ngOnInit(){
    this.TserProvider.get_course().subscribe((response) => {
      this.course = response;
      console.log(response);
    });
  }
  onCourseChange(value:any){
    console.log(value);
    this.course_id = value;
    this.group_id = null ;
     this.TserProvider.get_group_byid(value).subscribe((response) => {
       this.group = response;
       console.log(response);
     }); 
  }
  onGroupChange(value:any){
    console.log(value);
    this.group_id = value;
  }
  tocheckStd(){
    if(this.group_id == null){
      let  alert = this.alertController.create({
        title:"กรุณาเลือกกลุ่ม",
        buttons:[
         { text:"ตกลง"} 
        ]
      })
      alert.present()
    }else{
      let data ={
        course_id:this.course_id,
        group_id:this.group_id
      }
      this.navCtrl.push(CheckInStdPage,data)
    }     
  }
}
interface course_data{
  spc_course_id: string;
  spc_course_name: string;
}
interface group_data{
  spc_group_id: string;
  spc_group_name: string;
}
