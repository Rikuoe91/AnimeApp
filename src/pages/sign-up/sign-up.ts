import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AnimePage} from "../anime/anime";


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

    pushPageAnime(){
        // push another page on to the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
        this.navCtrl.push(AnimePage);
    }

}
