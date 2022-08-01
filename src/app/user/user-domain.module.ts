import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserLinksComponent } from './components/user-links/user-links.component';
import { LinksGroupComponent } from './components/links-group/links-group.component';


@NgModule({
  declarations: [
    UserInfoComponent,
    UserLinksComponent,
    LinksGroupComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    UserInfoComponent,
    UserLinksComponent,
    LinksGroupComponent
  ]
})
export class UserDomainModule { }
