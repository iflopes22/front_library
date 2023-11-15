import { Component, OnInit } from '@angular/core';
import { Register } from './../register/register.model';
import { RegisterService } from './../register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  registers: Register[]
  displayedColumns = ['id', 'name', 'cpf', 'tel', 'endereco', 'email', 'senha']
  
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.read().subscribe(registers => {
      this.registers = registers
    })
  }

}