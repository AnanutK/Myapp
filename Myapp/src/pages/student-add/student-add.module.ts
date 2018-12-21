import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAddPage } from './student-add';

@NgModule({
  declarations: [
    StudentAddPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAddPage),
  ],
})
export class StudentAddPageModule {}
