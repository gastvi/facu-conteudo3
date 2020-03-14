import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

ativo:boolean =false
tamanhoFonte:number = 10;

tarefa:any ={
  desc:'tarefa de inicialização do projeto',
  responsavel:{
    nome:'joão',
    depto:'Ti'
  }
}

  constructor() { }

mudarAtivo(){
    this.ativo = !this.ativo
  }

  ngOnInit() {
  }

}
