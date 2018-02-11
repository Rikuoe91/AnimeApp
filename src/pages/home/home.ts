import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {AnimePage} from "../anime/anime";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, ) {

  }

    pushPageSignUp(){
        // push another page on to the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
        this.navCtrl.push(SignUpPage);
    }
    pushPageAnime(){
        // push another page on to the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
        this.navCtrl.push(AnimePage);
    }


}
