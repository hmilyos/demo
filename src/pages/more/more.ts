import {Component} from '@angular/core';
import {LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RestProvider} from "../../providers/rest/rest";
import {BaseUI} from "../../common/baseui";
import { Storage } from '@ionic/storage';
import {UserdatalistPage} from "../userdatalist/userdatalist";
import {UserPage} from "../user/user";
import {ScanPage} from "../scan/scan";
import {VersionsPage} from "../versions/versions";
import {SettingsProvider} from "../../providers/settings/settings";


@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI {

  public logined: boolean = false;
  headface: string;
  userinfo: string[];
  selectedTheme: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public loadCtrl: LoadingController,
              public rest: RestProvider,
              private settings: SettingsProvider,
              public storage: Storage) {
    super();
  }

  showModal() {
    let modal = this.modalCtrl.create(LoginPage);
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.loadUserPage();
    });
    modal.present();
  }

  ionViewDidLoad(){
    this.loadUserPage();
  }


  ionViewDidEnter() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      console.log(val);
      if (val != null) {
        this.logined = true;
        var loading = super.showLoading(this.loadCtrl, "加载中...");
        this.rest.getUserInfo(val)
          .subscribe(
            userinfo => {
              this.userinfo = JSON.parse(userinfo.toString());
              this.headface = this.userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
              this.logined = true;
              loading.dismiss();
            }
          );
      }
      else {
        this.logined = false;
      }
    });
  }
  gotoDataList(type) {
    this.navCtrl.push(UserdatalistPage, { "dataType": type })
  }

  gotoUserPage() {
    this.navCtrl.push(UserPage);
  }

  /**
   * 跳转到扫描二维码的页面，加上 animate = false 的参数是为了
   * 相机能够在整个屏幕中显示，如果不加，相机就出不来。
   * animate 的参数默认值为 true
   *
   * @memberof MorePage
   */
  gotoScanQRCode() {
    this.navCtrl.push(ScanPage, null, { "animate": false });
  }

  toggleChangeTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.settings.setActiveTheme('light-theme');
      this.selectedTheme = 'light-theme';
    }
    else {
      this.settings.setActiveTheme('dark-theme');
      this.selectedTheme = 'dark-theme';
    }
  }

  gotoVersions() {
    this.navCtrl.push(VersionsPage);
  }
}
