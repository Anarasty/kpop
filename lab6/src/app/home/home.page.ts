import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertController } from '@ionic/angular';

import {DBService} from '../Server/db.service'

import { User } from './user.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'laba5';
  cancel = false
  json_result: any
  date: any[] = []
  user: User[] = []

  constructor(private http: HttpClient ,public alertCtrl: AlertController,private DBService: DBService){

    this.DBService.clearStorage()

  }

  async showAlert(object:any) {
    const alert = await this.alertCtrl.create({
      header: 'Information User',
      message: "User name:"+ object.name +" " +"email:" +  object.emai+" " +
        "login:" +" " +  object.login +" " + "password:" +" " + object.password +" " +
        "phonenumber:" +" " + object.phonenumber,
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }
  test(object:any){
    this.DBService.TestStorage(object)
  }


  Search(){
    this.json_result = this.http.get('https://randomuser.me/api/?results=10' )
      .subscribe((json_result)=>{
        this.json_result = json_result;
        console.log(this.json_result)

        for (var i = 0 ; i<20; i++) {
          let name: string = ""
          name = this.json_result.results[i].name.title + " " +
            this.json_result.results[i].name.first  + " "
            + this.json_result.results[i].name.last
          this.user.push( new User(name,
            this.json_result.results[i].email,this.json_result.results[i].login.username,
            this.json_result.results[i].login.password,
            this.json_result.results[i].cell,String(i)));
        }

      })
    console.log(this.user)
    return this.json_result
  }


}
