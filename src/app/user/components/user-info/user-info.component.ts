import { Component, Input, OnInit } from '@angular/core';
import { Info } from '../../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() userInfo: Info | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userInfo)
  }

}
