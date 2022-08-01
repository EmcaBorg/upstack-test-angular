import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetModule } from '@ngrx/component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDomainModule } from './user-domain.module';

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    LetModule,
    UserDomainModule,
    UserRoutingModule
  ],
})
export class UserRoutedModule { }
