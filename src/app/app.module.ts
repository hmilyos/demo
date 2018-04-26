import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AnswerPage} from "../pages/answer/answer";
import {ChatPage} from "../pages/chat/chat";
import {ChatdetailsPage} from "../pages/chatdetails/chatdetails";
import {DetailsPage} from "../pages/details/details";
import {DiscoveryPage} from "../pages/discovery/discovery";
import {NotificationPage} from "../pages/notification/notification";
import {MorePage} from "../pages/more/more";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {UserPage} from "../pages/user/user";
import {HeadfacePage} from "../pages/headface/headface";
import {QuestionPage} from "../pages/question/question";
import { RestProvider } from '../providers/rest/rest';
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from '@ionic/storage';
import {ScanPage} from "../pages/scan/scan";

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { EmojiProvider } from '../providers/emoji/emoji';
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import {ComponentsModule} from "../components/components.module";
import {UserdatalistPage} from "../pages/userdatalist/userdatalist";
import { SettingsProvider } from '../providers/settings/settings';

import { QRScanner } from '@ionic-native/qr-scanner';
import { AppVersion } from '@ionic-native/app-version';
import {VersionsPage} from "../pages/versions/versions";
import {RelativetimePipe} from "../pipes/relativetime/relativetime";
import {BasciUiPage} from "../pages/basci-ui/basci-ui";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    UserdatalistPage,
    VersionsPage,
    ScanPage,
    BasciUiPage,
    RelativetimePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //全局需要导入 HTTP
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',   //定义全局的返回文字
    }),
    IonicStorageModule.forRoot(), //全局定义 storage 的模块
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    UserdatalistPage,
    ScanPage,
    BasciUiPage,
    VersionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    File,
    Transfer,
    TransferObject,
    FilePath,
    Camera,
    QRScanner,
    AppVersion,
    EmojiProvider,
    ChatserviceProvider,
    SettingsProvider
  ]
})
export class AppModule {}
