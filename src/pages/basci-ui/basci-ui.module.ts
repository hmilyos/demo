import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasciUiPage } from './basci-ui';

@NgModule({
  declarations: [
    BasciUiPage,
  ],
  imports: [
    IonicPageModule.forChild(BasciUiPage),
  ],
})
export class BasciUiPageModule {}
