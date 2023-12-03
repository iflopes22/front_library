import { Component, OnInit } from '@angular/core';
import { Register } from './../register/register.model';
import { RegisterService } from './../register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registers: Register[]
  register: Register = {
    name: '',
    senha: '',
    email: ''
  }
  confEmail: ''
  confSenha: ''

  displayedColumns = ['id', 'name', 'email', 'senha']
  
  constructor(private registerService: RegisterService, 
    private router: Router) { }

  ngOnInit(): void {
/*
    this.registerService.read().subscribe((response) => {
      this.registers = response;
    });
    }*/

    this.registerService.read().subscribe(registers => {
      this.registers = registers
    })
  }

  createUser(): void {
    if(this.confEmail != this.register.email) {
      this.registerService.showMessage("O campo E-mail e Confirmação de E-mail não correspondem.");
    }

    if(this.confSenha != this.register.senha) {
      this.registerService.showMessage("O campo Senha e confirmação de Senha não correspondem.")
    }

    this.registerService.create(this.register).subscribe(() => {
      this.registerService.showMessage('Usuário cadastrado!')
      this.router.navigate(['/register'])
    })
/*
    this.registerService.create(this.register).subscribe((response) => {
      this.registers = response;
      this.registerService.showMessage('Usuário cadastrado!')
      this.router.navigate(['/register'])
    });
    }*/
}
}