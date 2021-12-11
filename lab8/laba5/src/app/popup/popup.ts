import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {User} from '../model/user.model';


@Component({
  selector: 'dialog-data-example',
  templateUrl: 'dialog-data-example.html',
})
export class UserInfoDialog {

  constructor(public dialog: MatDialog) {

  }

  openDialogs(object: any) {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        name: object.name,
        email: object.email,
        login: object.login,
        password: object.password,
        cell: object.cell
      }
    })
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'popup.html',
})
//можно внедрить зависимоть напрямую без обращения к каждому элементу как в кострукторе
export class DialogDataExampleDialog { 
  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {
  }
}
