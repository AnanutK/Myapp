import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import moment from 'moment';
/*
  Generated class for the MRgRealstudyplanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TserProvider {
  public start_date:string = moment().format('YYYY-MM-DD').toString() 
  constructor(public http: Http) {
    console.log('Hello TserProvider Provider');
  }
  get_student(g_id:any) {
    return this.http.post('http://10.80.6.162:1040/getStd',{g_id:g_id}).pipe(map((res)=>res.json())); 
  }
  get_course(){
    return this.http.get('http://10.80.6.162:1040/getCourse').pipe(map((res)=>res.json()));
  }
  get_group(){
    return this.http.get('http://10.80.6.162:1040/getGroup',).pipe(map((res)=>res.json()));
  }
  get_group_byid(c_id:any){
    return this.http.post('http://10.80.6.162:1040/getGroupById',{c_id:c_id}).pipe(map((res)=>res.json()));
  }
  get_stdNum(g_id:any){
    return this.http.post('http://10.80.6.162:1040/getStdNum',{g_id:g_id}).pipe(map((res)=>res.json()));
  }
  get_stdDetail(g_id:any){
    return this.http.post('http://10.80.6.162:1040/getStdDetail',{g_id:g_id}).pipe(map((res)=>res.json()));
  }
  get_timeTable(g_id:any,d_id:any){
    return this.http.post('http://10.80.6.162:1040/gettimeTable',{g_id:g_id,d_id:d_id}).pipe(map((res)=>res.json()));
  }
  get_promotion(){
    return this.http.get('http://10.80.6.162:1040/getPromotion').pipe(map((res)=>res.json()));
  }
  get_courseDetail(c_id:any){
    return this.http.post('http://10.80.6.162:1040/getCourseDetail',{c_id:c_id}).pipe(map((res)=>res.json()));
  }
  add_std(g_id:any,s_id:any){
    return this.http.post('http://10.80.6.162:1040/stdInsert',{g_id:g_id,s_id:s_id}).pipe(map((res)=>res.json()));
  }
  get_subject(c_id:any){
    return this.http.post('http://10.80.6.162:1040/getSubject',{c_id:c_id}).pipe(map((res)=>res.json()));
  }
  get_time(g_id:any,sub_id:any){
    return this.http.post('http://10.80.6.162:1040/getTime',{g_id:g_id,sub_id:sub_id}).pipe(map((res)=>res.json()));
  }
  get_StdRegist(g_id:any,t_id:any){
    return this.http.post('http://10.80.6.162:1040/getStdRegist',{g_id:g_id,t_id:t_id}).pipe(map((res)=>res.json()));
  }
  add_Checkin(regist_id:any,std_id:any,table_id:any,time:any,date:any){
    return this.http.post('http://10.80.6.162:1040/addCheckin',{regist_id:regist_id,std_id:std_id,table_id:table_id,time:time,date:date}).pipe(map((res)=>res.json()));
  }
  get_Checkin(){
    return this.http.get('http://10.80.6.162:1040/getCheckin').pipe(map((res)=>res.json()));
  }
}

    

