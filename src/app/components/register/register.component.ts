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
  displayedColumns = ['id', 'name', 'cpf', 'tel', 'endereco', 'email', 'senha']
  
  constructor(private registerService: RegisterService, 
    private router: Router) { }

  ngOnInit(): void {
    this.registerService.read().subscribe(registers => {
      this.registers = registers
    })
  }

  createUser(): void {
    this.registerService.create(this.register).subscribe(() => {
      this.registerService.showMessage('Usuário cadastrado!')
      this.router.navigate(['/register'])
    })
}
}