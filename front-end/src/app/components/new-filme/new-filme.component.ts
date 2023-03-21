import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/Filme';
import { ConnfilmeService } from 'src/app/services/connfilme.service';

import { Route, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-filme',
  templateUrl: './new-filme.component.html',
  styleUrls: ['./new-filme.component.css']
})
export class NewFilmeComponent {

  btnText = "Adicionar Filme"

  constructor(
    private connFilmeService: ConnfilmeService,
    private messagesService: MessagesService,
    private router: Router
  ) { }

  async createHandle(filme: Filme) {
    console.log("Deu certo")
    const formData = new FormData()

    // preenchendo os campos do formulário
    formData.append('title', filme.title)
    formData.append('author', filme.author)
    formData.append('description', filme.description)

    if (filme.image) {
      formData.append('imagem', filme.image)
    }

    //todo

    //adiciona um filme
    await this.connFilmeService.createFilme(formData).subscribe();

    //exibir mensagem 
    this.messagesService.add("Filme adicionado com sucesso!")

    // redirect : direciona depois do insert
    this.router.navigate(['/'])
  }
}
 