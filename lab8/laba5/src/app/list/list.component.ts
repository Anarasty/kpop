import {Component, OnInit} from '@angular/core';
import {User} from "../model/user.model";
import {HttpErrorResponse} from "@angular/common/http";
import {UserInfoDialog} from "../popup/popup";
import {FavoriteUsers} from "../model/favorite-user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  json_result: any
  date: any[] = []
  user: User[] = []
  favorite: FavoriteUsers[] = []
//напрямую внедреятся зависимость через конструктор
  constructor(public dialogUser: UserInfoDialog, private userService: UserService) {
  }

  getUsersFromAPI() {
    return this.userService.findUser().subscribe(
      (response: Object) => {
        this.json_result = response;
        console.log(this.json_result)

        for (var i = 0; i < this.json_result.results.length; i++) {
          let name = this.json_result.results[i].name.title + " " +
            this.json_result.results[i].name.first + " "
            + this.json_result.results[i].name.last
          this.user.push(new User(name,
            this.json_result.results[i].email,
            this.json_result.results[i].login.username,
            this.json_result.results[i].login.password,
            this.json_result.results[i].cell));
        }
      }, (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.message)
      })
  }

  addToFavorite(object: any) {
    console.log('GET OBJECT' + object)
    this.favorite.push(object)
    console.log(this.favorite)
  }

  ngOnInit(): void {
  }
}
