import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { buildViewModel } from '../../../core/utils/viewmodel';
import { tap } from 'rxjs/operators';

interface UserProfileViewModel {
  user: User;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  vm$$ = buildViewModel<UserProfileViewModel, any>({
    user: this.userService.getUser()
  });

  constructor(private userService: UserService) { }

}
