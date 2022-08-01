import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { info, linksGroups } from 'src/app/core/data/mock';
import { Info, LinksGroup, User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API = 'links';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return forkJoin([this.http.get<User>(this.API), this.getInfo(), this.getLinksGroups()])
      .pipe(map((res: [user: User, info: Info, links: LinksGroup[]]) => {
        const [user, info, linksGroups] = res;
        user.info = info
        user.linksGroups = linksGroups;
        return user;
      }))
  }

  private getInfo(): Observable<Info> {
    return of(info)
  }

  getLinksGroups(): Observable<LinksGroup[]> {
    return of(linksGroups)
  }

}
