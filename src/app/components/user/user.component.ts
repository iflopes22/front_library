import { Component, OnInit } from '@angular/core';
import { Register } from './../register/register.model';
import { RegisterService } from './../register/register.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
email:""
senha:""
registers: Register[]
users: Register[]
user: {}
existeMensagem: Boolean
mensagem: String
existeEmail: Boolean
constructor(private registerService: RegisterService,
  private router: Router,
  private route: ActivatedRoute) { }

ngOnInit(): void {
  this.registerService.read().subscribe(registers => {
    this.registers = registers
  })
  this.existeMensagem = false;
}


login() {
  this.existeEmail = false;
  this.registerService.read().subscribe(registers => {
    this.users = registers;
  })
  this.users.forEach((us => {
      if(us.email == this.email) {
        this.existeEmail = true; 
        if(us.senha != null) {
          if(us.senha == this.senha) {
          //this.router.navigate(["/shop"]);
          console.log(this.email)
          console.log(us.email)
          console.log(this.senha)
          console.log(us.senha)
          this.router.navigate(['products/store'])
          this.registerService.showMessage('Login efetuado!')
          } else {
          console.log(this.senha)
          console.log(us.senha)
          this.registerService.showMessage('Senha incorreta')
          this.existeMensagem = true;
          return
          }
        } else {
          this.registerService.showMessage(' ')
          this.existeMensagem = true;
          return
        }
      }

      if(this.existeEmail == false) {
        this.registerService.showMessage('E-mail não cadastrado')
        this.existeMensagem = true;
      }
      this.router.navigate(['products/store'])
      this.registerService.showMessage('Login efetuado!')
  }))
}

}