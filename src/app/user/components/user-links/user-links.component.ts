import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../models/user.model';

@Component({
  selector: 'app-user-links',
  templateUrl: './user-links.component.html',
  styleUrls: ['./user-links.component.scss']
})
export class UserLinksComponent implements OnInit {

  @Input() links!: Link[];

  constructor() { }

  open(link: string) {
    window.open(link, '_blank');
  }

  ngOnInit(): void {
  }

}
