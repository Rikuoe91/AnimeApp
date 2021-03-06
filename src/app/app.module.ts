import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SignUpPage} from "../pages/sign-up/sign-up";
import {AnimePage} from "../pages/anime/anime";
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CONFIG} from "./app.firebase.config";
import {AngularFireAuthModule} from "angularfire2/auth"
import {WelcomePage} from "../pages/welcome/welcome";
import {Youtube} from "../pipes/youtube/youtube";
import { AuthProvider } from '../providers/auth/auth';


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SignUpPage,
        AnimePage,
        WelcomePage,
        Youtube

    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireAuthModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SignUpPage,
        AnimePage,
        WelcomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthProvider
    ]
})
export class AppModule {}
