import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

    async login(){

        console.log(this.user);

        try {
           const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password);
            console.log(result);

            if(result){
                this.navCtrl.setRoot(AnimePage);
            }

        }catch(e){
            console.error(e);
        }

    }


}
