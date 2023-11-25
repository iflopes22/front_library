import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  email: string = '';
  senha: string = '';

  fazerLogin(): void {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
  }
}
