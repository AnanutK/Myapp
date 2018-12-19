import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';

@IonicPage()
@Component({
  selector: 'page-group-manage',
  templateUrl: 'group-manage.html',
})
export class GroupManagePage {
  student: std_data[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public TserProvider: TserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupManagePage');
  }
  ngOnInit(){
    this.TserProvider.get_student().subscribe((response) => {
      this.student = response;
      console.log(response);
    });

  }

}
interface std_data{
  spc_student_id: string;
  spc_student_tname: string;
  spc_student_tsurname: string;
  spc_student_tnickname: string;
}
