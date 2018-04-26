import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {BaseUI} from "../../common/baseui";
import {RestProvider} from "../../providers/rest/rest";
import { Storage } from '@ionic/storage';
import {RegisterPage} from "../register/register";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI {

  mobile: any;
  password: any;
  errorMessage: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public rest: RestProvider,
              public toastCtrl: ToastController,
              public storage: Storage) {
    super(); //调用父类的构造函数 constructor
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    var loading = super.showLoading(this.loadingCtrl, "登录中...");
    this.rest.login(this.mobile, this.password)
      .subscribe(
        f => {
          var temp = JSON.parse(f.toString());
          if (temp["Status"] == "OK") {
            //处理登录成功的页面跳转
            //你也可以存储接口返回的 token
            this.storage.set('UserId',temp["UserId"]);
            loading.dismiss();
            this.dismiss();
          }
          else {
            loading.dismiss();
            super.showToast(this.toastCtrl, temp["StatusContent"]);
          }
        },
        error => this.errorMessage = <any>error);
  }

  /**
   * 关闭当前页面的方法
   *
   * @memberof LoginPage
   */
  dismiss() {
    this.viewCtrl.dismiss()
  }

  pushRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}
