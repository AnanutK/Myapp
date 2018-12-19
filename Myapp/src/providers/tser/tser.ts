import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

/*
  Generated class for the MRgRealstudyplanProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TserProvider {
  constructor(public http: Http) {
    console.log('Hello TserProvider Provider');
  }
  get_student() {
    return this.http.get('http://10.80.6.162:1040/getStd').pipe(map((res)=>res.json())); 
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
}

    

