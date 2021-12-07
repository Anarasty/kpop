import { Component, OnInit } from '@angular/core';

import {DBService} from '../Server/db.service'


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {

  constructor(public DBService: DBService) {
    DBService.getValue()
  }
  test(object:any){
    this.DBService.TestStorage(object)
  }

  ngOnInit() {}

}
