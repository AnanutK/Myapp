import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TserProvider } from '../../providers/tser/tser';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-group-manage',
  templateUrl: 'group-manage.html',
})
export class GroupManagePage {
  student: std_data[];
  promotion : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public TserProvider: TserProvider)  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupManagePage');
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  }
  ngOnInit(){
    this.TserProvider.get_promotion().subscribe((response) => {
      this.promotion = response;
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
