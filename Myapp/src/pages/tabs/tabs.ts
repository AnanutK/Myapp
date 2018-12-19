import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';
import { StudentDetailPage } from '../student-detail/student-detail';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  course_id: any;
  group_id: any;
  course: course_data[];
  group: group_data[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public TserProvider: TserProvider,private alertController:AlertController) {
    
  }
  openAlert(){
    
  }
  ngOnInit(){
    this.TserProvider.get_course().subscribe((response) => {
      this.course = response;
      console.log(response);
    });
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad TabsPage');
  }
  check_course(){
    if(this.course_id == null){
      let  alert = this.alertController.create({
        title:"กรุณาเลือกคอร์ส",
        buttons:[
         { text:"ตกลง"} 
        ]
      })
      alert.present()
    }
  }
  load(){
    if (this.group_id == null) {
      let  alert = this.alertController.create({
        title:"กรุณาเลือกกลุ่ม",
        buttons:[
         { text:"ตกลง"} 
        ]
      })
      alert.present()
    } else {
      let data ={
        group_id:this.group_id
      }
      this.navCtrl.push(StudentDetailPage,data)
    }  
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
}
interface course_data{
  spc_course_id: string;
  spc_course_name: string;
}
interface group_data{
  spc_group_id: string;
  spc_group_name: string;
}

