import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupManagePage } from './group-manage';

@NgModule({
  declarations: [
    GroupManagePage,
  ],
  imports: [
    IonicPageModule.forChild(GroupManagePage),
  ],
})
export class GroupManagePageModule {}
