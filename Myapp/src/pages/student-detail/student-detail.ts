import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';

/**
 * Generated class for the StudentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-detail',
  templateUrl: 'student-detail.html',
})
export class StudentDetailPage {
group_id:any
num: std_number[]
course: course_data[] 
 

  constructor(public navCtrl: NavController, public navParams: NavParams , public TserProvider: TserProvider) {
  }
  ngOnInit(){
    console.log("HOOOOO")
    
    
  }
  ionViewDidLoad() {
    this.group_id = this.navParams.get('group_id')
    this.TserProvider.get_stdNum(this.group_id).subscribe((response) => {
      this.num = response;
      console.log(response);
    });
    this.TserProvider.get_stdDetail(this.group_id).subscribe((response) => {
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
  spc_student_tname: string;
  spc_student_tsurname: string;
  spc_edu_level_name: string;
}
interface std_number{
  std_num: string;
}