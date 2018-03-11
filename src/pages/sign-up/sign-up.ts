import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AnimePage} from "../anime/anime";
import {User} from "../../models/user"
import {AngularFireAuth} from "angularfire2/auth"

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

    user ={} as User;

  constructor( private afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  async signUp(user:User){
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    }catch(e){
      console.error(e)
    }
    this.navCtrl.setRoot(AnimePage);
 }

}
