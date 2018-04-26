import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {BaseUI} from "../../common/baseui";

/**
 * Generated class for the BasciUiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basci-ui',
  templateUrl: 'basci-ui.html',
})
export class BasciUiPage extends BaseUI  {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    super();
  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('标题');
    for(var i = 0; i < 3; i++){
      alert.addInput({type: 'checkbox', label: ('选项'+ i), value: i + '', checked: (i == 0)});
    }

    alert.addButton('关闭');
    alert.addButton({
      text: '提交',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

  toShowRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('标题');

    for(var i = 0; i < 3; i++){
      alert.addInput({type: 'radio', label: ('选项'+ i), value: i + '', checked: (i == 0)});
    }

    alert.addButton('关闭');
    alert.addButton({
      text: '提交',
      handler: data => {
        console.log(data);
      }
    });
    alert.present();
  }

  toShowConfirm() {
    let confirm = this.alertCtrl.create({
      title: '标题?',
      message: '内容：是不是同意啦?',
      buttons: [
        {
          text: '不同意',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '同意',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  toShowPrompt() {
    let prompt = this.alertCtrl.create({
      title: '标题',
      message: "提示信息",
      inputs: [
        {name: 'username', placeholder: '请输入用户名'},
        {name: 'password', placeholder: '请输入密码'},
      ],
      buttons: [
        {text: '关闭',
          handler: data => {
            console.log('Cancel clicked');
            console.log(data);
          }
        },
        {text: '提交',
          handler: data => {
            console.log('提交的数据');
            console.log(data);
          }
        }
      ]
    });
    prompt.present();
  }

  toShowAlert() {
    super.showAlert(this.alertCtrl, '标题', '内容', '关闭按钮文字');
  }

  toShowLoading() {
    var loading = super.showLoading(this.loadingCtrl, "登录中...");
    setTimeout(() => loading.dismiss(), 5000);
  }

  toShowToast(){
    super.showToast(this.toastCtrl, '提示内容');
  }

  ionViewDidLoad() {

  }

}
