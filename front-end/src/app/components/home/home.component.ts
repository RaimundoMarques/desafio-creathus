import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/Filme';
import { ConnfilmeService } from 'src/app/services/connfilme.service';
import { environment } from 'src/environments/environments';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // URL's
  allFilmes: Filme[] = []
  filme: Filme[] = []
  baseApiUrl = environment.baseApiUrl
  // todo search
  faSearch = faSearch
  searchTerm: string = ''
  constructor(private filmesService: ConnfilmeService) { }
  ngOnInit(): void {
    this.filmesService.getFilmes().subscribe((item) => {
      const data = item.data
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })
      this.allFilmes = data //trás os filmes
      this.filme = data //busca filme individual
    })
  }
  // método de pesquisa na tela
  search(e: Event): void {
    // resgatandoo value do input
    const target = e.target as HTMLInputElement
    const value = target.value
    this.filme = this.allFilmes.filter((film)  => {
      return film.title.toLocaleLowerCase().includes(value);
    })
  }
}
