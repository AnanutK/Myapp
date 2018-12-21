import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';
/**
 * Generated class for the StudentAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-add',
  templateUrl: 'student-add.html',
})
export class StudentAddPage {
  group_id:any
  num: std_number[]
  course: course_data[]
  course_detail: any[]
  constructor(public navCtrl: NavController, public navParams: NavParams,public TserProvider: TserProvider,public LoadingController:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAddPage');
    this.group_id = this.navParams.get('group_id')
    setTimeout(() => {
      this.TserProvider.get_student(this.group_id).subscribe((response) => {
        this.course = response;
        console.log(response);
      });
      this.TserProvider.get_courseDetail(this.group_id).subscribe((response) => {
        this.course_detail = response;     
        console.log(response);
      });
  },500);  
  }
  addstd(s_id:any){
    console.log(s_id);
    console.log(this.group_id);
    this.TserProvider.add_std(this.group_id,s_id).subscribe((response) => {
      console.log(response);
    });
    setTimeout(() => {
        this.getstd()
    },500);
    
  }
  getstd(){

    this.TserProvider.get_student(this.group_id).subscribe((response) => {
      this.course = response;
      console.log(response);
    });
  }
}
interface course_data{
  spc_course_id: string;
  spc_course_name: string;
  spc_group_name: string;
  spc_course_detail: string;
  spc_prefix_nameTH: string;
  spc_student_id:string;
  spc_student_tname: string;
  spc_student_tsurname: string;
  spc_edu_level_name: string;
}
interface std_number{
  std_num: string;
}
