import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentDetailPage } from './student-detail';

@NgModule({
  declarations: [
    StudentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentDetailPage),
  ],
})
export class StudentDetailPageModule {}
