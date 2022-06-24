import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/usuarios.service';
import { Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userd-deatil',
  templateUrl: './userd-deatil.component.html',
  styleUrls: ['./userd-deatil.component.scss'],
})
export class UserdDeatilComponent implements OnInit {

  usuario;
  id: any;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.getAllbyId(this.id);

   }

  ngOnInit() {}

  getAllbyId(id) {
    this.userService.get(id).subscribe((data: any) => {
      console.log(data);
      let numero = [];
      numero = data.phone.split('x');
      this.usuario = data;
      this.usuario.phone = numero[0];
      console.log(this.usuario.name);
    }
    );
  }

}
