import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth"
import {User} from "firebase/app";
import {WelcomePage} from "../welcome/welcome";

@IonicPage()
@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {

    user ={} as User;

  constructor(private afAuth:AngularFireAuth, private toast:ToastController,
      public navCtrl: NavController, public navParams: NavParams) {
  }

    SignOut(){
        this.afAuth.auth.signOut()
        this.navCtrl.setRoot(WelcomePage);
    }

}
