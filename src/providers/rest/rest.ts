//import {HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }
  //feed
  private apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';

  //account
  private apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
  private apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
  private apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
  private apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';

  private apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";

  //question
  private apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
  private apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
  private apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
  private apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
  private apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";



  //notification
  private apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";

  /**
   * 获取用户的相关问题列表
   *
   * @param {any} userId
   * @param {any} type  question/answer/favourite
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  getUserQuestionList(userId, type): Observable<Object> {
    return this.getUrlReturn(this.apiGetUserQuestionList + "?userid=" + userId + "&type=" + type);
  }

  /**
   * 获取用户的提醒消息
   *
   * @param {any} userId
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  getUserNotifications(userId): Observable<Object> {
    return this.getUrlReturn(this.apiUrlUserNotifications + "?userid=" + userId);
  }

  /**
   * 获取所有的新问题
   *
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  getQuestions(): Observable<Object> {
    return this.getUrlReturn(this.apiUrlQuestionList);
  }

  /**
   * 获取问题的详情，传递 userid 获取到当前用户有没有关注此问题
   *
   * @param {any} questionId
   * @param {any} userId
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  getQuestionWithUser(questionId, userId): Observable<Object> {
    return this.getUrlReturn(this.apiUrlGetQuestionWithUser + "?id=" + questionId + "&userid=" + userId);
  }

  saveFavourite(questionId, userId): Observable<Object> {
    return this.getUrlReturn(this.apiUrlSaveFavourite + "?questionid=" + questionId + "&userid=" + userId);
  }

  answer(userId, questionId, content): Observable<Object> {
    return this.getUrlReturn(this.apiUrlAnswer + "?userid=" + userId + "&questionid=" + questionId + "&content=" + content);
  }

  /**
   * 保存提问
   *
   * @param {any} userId
   * @param {any} title
   * @param {any} content
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  saveQuestion(userId, title, content): Observable<Object> {
    return this.getUrlReturn(this.apiUrlQuestionSave + "?userid=" + userId + "&title=" + title + "&content=" + content);
  }

  /**
   * 请求首页的 feeds 流
   *
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  getFeeds(): Observable<Object> {
    return this.getUrlReturn(this.apiUrlFeeds);
  }
  /**
   * 根据用户的手机号码和密码进行登录
   *
   * @param {any} mobile
   * @param {any} password
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  login(mobile, password): Observable<Object> {
    return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
  }


  getUserInfo(userId): Observable<Object> {
    return this.getUrlReturn(this.apiUrlUserInfo + "?userid=" + userId);
  }

  updateNickName(userId, nickname): Observable<Object> {
    return this.getUrlReturn(this.apiUrlUpdateNickName + "?userid=" + userId + "&nickname=" + nickname);
  }


  /**
   * 注册请求
   *
   * @param {any} mobile
   * @param {any} nickname
   * @param {any} password
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  register(mobile, nickname, password): Observable<Object> {
    return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + mobile + "&nickname=" + nickname + "&password=" + password)
  }

  /**
   * 全局获取 HTTP 请求的方法
   * @Parry
   * @private
   * @param {string} url
   * @returns {Observable<string[]>}
   * @memberof RestProvider
   */
  private getUrlReturn(url: string): Observable<Object> {
    return this.http.get(url).catch(err => {
      return  Observable.throw(err ? err : {'errMsg': '出错啦！'} );
    });
  }



 /* private handleError(error: Response | any) {
    let errMsg: string;
/!*    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }*!/
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/

}
