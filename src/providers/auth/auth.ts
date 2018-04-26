import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {User} from "../../models/user";

@Injectable()
export class AuthProvider {
    user ={} as User;
    username:any;
    videoArray:any;
    userDB=firebase.database().ref('/userProfile');
    videoDB=firebase.database().ref('/videos');


  constructor() {

  }

  getAllVideos():Promise<any>{

   return this.videoDB.once('value').then(function(snapshot) {
          var videoList = snapshot.val();
        return videoList;
      });
  }

  checkUser(){
      return firebase.auth().currentUser;
  }

    loginUser(email: string, password: string): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password).then(userInfo =>{
            this.user=userInfo;
            return this.user;
        });
    }

    getUserInfo(uid:string):Promise<any>{
        return firebase.database().ref('/userProfile/' + uid).once('value').then(function(snapshot) {
            var username = snapshot.val();

            firebase.auth().currentUser.updateProfile({
                displayName:username.fName,
                photoURL:""
            });
            return username;
        });
    }

    signupUser( fName: string, lName:string, email: string, password: string): Promise<any> {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(newUser => {
                    this.userDB
                    .child(newUser.uid)
                    .set({email: email, fName:fName, lName:lName});
            });
    }

    logoutUser(): Promise<void> {
        return firebase.auth().signOut();
    }


}
