import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignUpPage} from "../sign-up/sign-up";
import {AnimePage} from "../anime/anime";
import {User} from "../../models/user";
import {AngularFireAuth} from "angularfire2/auth"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    user ={} as User;


  constructor( private afAuth:AngularFireAuth, public navCtrl: NavController, ) {

  }

    pushPageSignUp(){
        // push another page on to the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
        this.navCtrl.push(SignUpPage);
    }

    async login(user){
        try {
           const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
            console.log(result);

            if(result){
                this.navCtrl.setRoot(AnimePage);
            }

        }catch(e){
            console.error(e);
        }

    }


}
