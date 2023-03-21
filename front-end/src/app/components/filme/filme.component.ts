import { Component, OnInit } from '@angular/core';

import { ConnfilmeService } from 'src/app/services/connfilme.service';
import { Filme } from 'src/app/Filme';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environments';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit{

  filme?: Filme; 
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private filmeService : ConnfilmeService, 
    private route : ActivatedRoute,
    private messagesService : MessagesService,
    private router : Router
    ){}

  ngOnInit(): void{

    // buscar por id na url
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.filmeService
    .getFilme(id)
    .subscribe( (item) => (this.filme = item.data) )
  }

  // apagar resgistro
  async removeHandle(id: number){
    console.log("Excluindo filme!!")
    await this.filmeService.removeFilme(id).subscribe() //Aguarda resposta da API para excluir o registro
    this.messagesService.add("Filme excluído com sucesso") //Notifica da ação
    this.router.navigate(['/'])//Redireciona para a página HOME
  }

}
