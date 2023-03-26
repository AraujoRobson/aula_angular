import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  listaTarefas : any[]  = []

  constructor() { }

  ngOnInit(): void {
    this.listaTarefas = [
      {id: 0, nome:'Lavar o carro', concluida: false},
      {id: 1, nome:'Ir ao mercado', concluida: true},
      {id: 2, nome:'Lavar roupas', concluida: false}
    ]
  }

  adicionar(nomeTarefa: string){
    this.listaTarefas.push({id: this.listaTarefas.length, nome: nomeTarefa, concluida: false})
  }

}
