import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-anime',
  templateUrl: 'anime.html',
})
export class AnimePage {

    user:any;
    videos= new Array();
    newVideos:any;
    user_name:any;
    searchTerm: string = '';


  constructor(public authProvider: AuthProvider, private toast:ToastController,
      public navCtrl: NavController, public navParams: NavParams) {
       this.user = this.authProvider.checkUser();
       this.user_name= this.user.displayName;
       this.videos=this.authProvider.videoArray;
       this.authProvider.getAllVideos().then(videos =>{
          // for (var key in videos){
          //     this.videos.push(key);
          // }
          // console.log(this.videos);
          //  this.setFilteredItems();
           this.videos=videos
      });


  }


    setFilteredItems() {

        this.newVideos = this.filterItems(this.searchTerm);

    }

    logOutUser(): void {
        this.authProvider.logoutUser()
            .then( authData => {
                this.navCtrl.setRoot(WelcomePage);
            })
    }

    filterItems(searchTerm){
        return this.videos.filter((video) => {
            return video.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });


    }

}
