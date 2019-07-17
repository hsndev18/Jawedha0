import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'الرئيسية',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'المطاعم',
      url: '/restaurants',
      icon: 'restaurant'
    },
    {
      title: 'المقاهي',
      url: '/cafes',
      icon: 'coffee-cup'
    },
    {
      title: 'الأسر المنتجة',
      url: '/families',
      icon: 'cooking'
    },
    {
      title: 'عربات الطعام',
      url: '/tracks',
      icon: 'ice-cream-cart'
    },
    {
      title: 'المتاحف',
      url: '/museums',
      icon: 'bank'
    },
    {
      title: 'اتصل بنا',
      url: '/contact',
      icon: 'arroba'
    },
    {
      title: 'نبذة عننا',
      url: '/aboutus',
      icon: 'info'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
