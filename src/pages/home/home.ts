import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loader: any;

  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private oneSignal: OneSignal,
    splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
  ) {

this.AbreCarregando();




let TIME_IN_MS = 5000;
let hideFooterTimeout = setTimeout( () => {
  this.loader.dismiss();
}, TIME_IN_MS);




     this.push();
     // this.abrir();

       splashScreen.hide();

      // this.admob();

      }

      animateElem() {

      }


      AbreCarregando() {
        this.loader = this.loadingCtrl.create({
          content: "Carregando..."
        });
        this.loader.present();
      }

    FechaCarregando(){
      this.loader.dismiss();
    }




      push(){
        this.oneSignal.startInit('a1b65cfa-f4d5-46c9-9c76-c0c98aea337e', '376496280412');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe((msg) => {
        alert(msg);
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();


      }






abrir(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'no'
  }

 const browser = this.iab.create('https://campinasempregos.com.br', '_blank', options);



}








}
