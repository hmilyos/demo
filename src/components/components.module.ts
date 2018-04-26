import { NgModule } from '@angular/core';
import { EmojipickerComponent } from './emojipicker/emojipicker';
import { QuestionListComponent } from './question-list/question-list';
import {IonicPageModule} from "ionic-angular";
@NgModule({
	declarations: [EmojipickerComponent,
    QuestionListComponent],
	imports: [IonicPageModule .forChild(EmojipickerComponent)],
	exports: [EmojipickerComponent,
    QuestionListComponent]
})
export class ComponentsModule {}
