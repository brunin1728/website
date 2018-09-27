import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { AnimationService, AnimationBuilder } from 'css-animator';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myElement') myElem;
  private animator: AnimationBuilder;


  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private oneSignal: OneSignal,
    splashScreen: SplashScreen,
    private admobFree: AdMobFree,
    public animationService: AnimationService
  ) {




      this.push();

       splashScreen.hide();


       this.animator = animationService.builder();
      }

      animateElem() {
        this.animator.setType('fadeIn').show(this.myElem.nativeElement);
      }


admob(){


    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-7899546884299152/7847101321',
      isTesting: false,
      autoShow: true,
      overlap: false,
      offsetTopBar: true

     };
     this.admobFree.banner.config(bannerConfig);

     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));

}













abrir(){
  const options: InAppBrowserOptions = {
    zoom: 'no',
    location: 'no'
  }

 const browser = this.iab.create('https://www.bnctecnologia.com.br', '_blank', options);

 this.admob();

}


push(){
  this.oneSignal.startInit('dd743356-b81b-4ea8-86da-993d273c820d', '1001915559416');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe((msg) => {
  alert(msg);
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

this.oneSignal.endInit();


}


tempo(){
  setTimeout("this.admob()", 10000);
}


ionViewDidEnter(){
this.admob();
}


}
