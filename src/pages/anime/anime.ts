import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {AngularFireAuth} from "angularfire2/auth"

@IonicPage()
@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {



  constructor(private afAuth:AngularFireAuth, private toast:ToastController,
      public navCtrl: NavController, public navParams: NavParams) {
  }

/*  ionViewDidLoad() {
    this.afAuth.auth.authState.subscribe(data => {
        if ( data && data.email && data.uid){
            this.toast.create({
                message: 'Welcome to AnimeAPP, ${data.email}',
                duration: 6000
            }).present();
      }else{
            this.toast.create({
                message: 'could not find authentication details',
                duration: 6000
            }).present();
        }
      })
  }*/


}
