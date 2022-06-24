import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../common/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  usuarios: any[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.getAll();
  }

  ngOnInit() {}

  getAll() {
    this.userService.getAll().subscribe((data: any) => {
      console.log(data);
      this.usuarios = data;
    }
    );
  }

  userDeatails(user) {
    console.log(user);
    this.router.navigate(['/user-deatil', user.id]);
  }



}
