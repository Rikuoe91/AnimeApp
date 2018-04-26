import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AnimePage} from "../anime/anime";
import {User} from "../../models/user";
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    user ={} as User;


  constructor( public authProvider: AuthProvider, public navCtrl: NavController, ) {

  }

    loginUser(): void {
        this.authProvider.loginUser(this.user.email,
            this.user.password)
            .then( authData => {

                this.authProvider.user=authData;
                this.authProvider.getUserInfo(authData.uid).then(userData=>{

                    this.authProvider.username=userData;
                    this.navCtrl.setRoot(AnimePage);
                });
            })
    }



}
