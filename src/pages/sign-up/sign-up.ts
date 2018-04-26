import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AnimePage} from "../anime/anime";
import {User} from "../../models/user"
import {AngularFireAuth} from "angularfire2/auth"
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

    user ={} as User;

  constructor(  public authProvider: AuthProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

    signupUser(){
        this.authProvider.signupUser(this.user.fName,this.user.lName,this.user.email,this.user.password)
            .then( authData => {
                this.navCtrl.setRoot(AnimePage, {fName:this.user.fName});
                console.log(this.user.fName)
            })
    }


}
