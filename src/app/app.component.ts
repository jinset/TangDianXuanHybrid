import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';


declare var FCMPlugin;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public afd: AngularFireDatabase, 
    public push:Push, public alertCtrl: AlertController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushsetup();
      this.tokenSetup().then((token) => {
        this.storetoken(token);
      })
    });
  }

  tokenSetup(){
    var promise = new Promise((resolve, reject) => {
      FCMPlugin.getToken(function (token) {
        resolve(token);
      }, (err) =>{
        reject(err);
      })
    })
    return promise;
  }

  storetoken(token){
    this.afd.list("user").update(token, {
      userToken: token
    }).then(() => {
      console.log("token stored")
    })
  }
  

  pushsetup(){
    console.log("entra pushsetup")
    const options: PushOptions = {
      android: {},
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {}
   };
   const pushObject: PushObject = this.push.init(options);

  pushObject.on('notification').subscribe((notification: any) =>{
      console.log(notification);
      let yourAlert = this.alertCtrl.create({
        title: "nueva notificacion",
        message: notification.message,
      });
      yourAlert.present();
  });

  pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
  

  
}
