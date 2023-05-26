import { Component } from '@angular/core';
import { ActivationEnd, Router, Event } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  userName:any = '';
  menuClassesActive:any;

  constructor(private router:Router){
    this.router.events.pipe(
      filter((event: Event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data),
      ).subscribe(({menuActive}) =>{
        this.menuClassesActive = [
          {dashboard:''},
          {career: ''},
          {ces: ''},
          {news: ''},
          {contactType: ''},
          {users: ''},
          {changePass: ''},
          {role: ''},
          {sync: ''},
          {security: ''},
          {config: ''},
          {userMenu: ''},
          {portada: ''},
          {teleclass: ''},
          {exams: ''}
        ];
        this.menuClassesActive[menuActive] = 'active';
        if (menuActive === 'users' || menuActive === 'role') {
          this.menuClassesActive.security = 'active';
        }        
        else if (menuActive === 'changePass') {
          this.menuClassesActive.userMenu = 'active';
        }
        else if (menuActive === 'contactType' || menuActive === 'portada' || menuActive === 'exams' || menuActive === 'teleclass'  || menuActive === 'sync') {
          this.menuClassesActive.config = 'active';
        }
      });
  }

  ngOnInit(): void {

  }
}
