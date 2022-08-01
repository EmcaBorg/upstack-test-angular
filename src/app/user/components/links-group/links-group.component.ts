import { Component, Input, OnInit } from '@angular/core';
import { Link, LinksGroup } from '../../models/user.model';

@Component({
  selector: 'app-links-group',
  templateUrl: './links-group.component.html',
  styleUrls: ['./links-group.component.scss']
})
export class LinksGroupComponent implements OnInit {

  @Input() group!: LinksGroup;

  constructor() { }

  open(link: string) {
    window.open(link, '_blank');
  }

  ngOnInit(): void {
  }

}
