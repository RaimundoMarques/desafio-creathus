import { Component, OnInit } from '@angular/core';

import { Filme } from 'src/app/Filme';
import { ConnfilmeService } from 'src/app/services/connfilme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-filme',
  templateUrl: './edit-filme.component.html',
  styleUrls: ['./edit-filme.component.css']
})
export class EditFilmeComponent implements OnInit{

  filme!: Filme
  btnText: string = "Editar"


  constructor(
    private filmesService : ConnfilmeService, 
    private route : ActivatedRoute,
    private messagesService: MessagesService, 
    private router : Router
    ){}


    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id')) // resgatando o ID
      
      this.filmesService.getFilme(id).subscribe( (item) => {
        this.filme = item.data
      })
    }

    async editHandle(filme: Filme){
      //console.log("Testando edição")

      const id = this.filme.id

      const formData = new FormData()


      formData.append('title', filme.title)
      formData.append('author', filme.author)
      formData.append('description', filme.description)


      // é preciso chegar a imagem
      if(filme.image){
        formData.append('imagem', filme.image)
      }

      await this.filmesService.updateFilme(id!, formData).subscribe()
      this.messagesService.add(`O Filme ${id} foi editado com sucesso!`)

      this.router.navigate(['/'])

    }


}
