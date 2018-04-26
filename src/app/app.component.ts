import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {FIREBASE_CONFIG} from "./app.firebase.config";
import firebase from 'firebase';
import {Unsubscribe} from '@firebase/util';
import {WelcomePage} from "../pages/welcome/welcome";
import {AnimePage} from "../pages/anime/anime";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any=WelcomePage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

        firebase.initializeApp(FIREBASE_CONFIG);

        const unsubscribe:Unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                this.rootPage = WelcomePage;
                unsubscribe();
            } else {
                this.rootPage = AnimePage;
                unsubscribe();
            }
        });


        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

        });
    }
}

