import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private oneSignal: OneSignal,
    splashScreen: SplashScreen
  ) {




      //this.push();
      this.abrir();

       splashScreen.hide();

      // this.admob();

      }

      animateElem() {

      }














abrir(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'no'
  }

 const browser = this.iab.create('https://bootgram.com.br/', '_blank', options);



}








}
