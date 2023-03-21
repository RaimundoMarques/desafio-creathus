import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Filme } from 'src/app/Filme';

@Component({
  selector: 'app-filmes-form',
  templateUrl: './filmes-form.component.html',
  styleUrls: ['./filmes-form.component.css']
})
export class FilmesFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Filme>();
  @Input() btnText!: string
  @Input() filmeData: Filme | null = null

  filmeForm!: FormGroup


  ngOnInit(): void {

    this.filmeForm = new FormGroup({
      id: new FormControl(this.filmeData ? this.filmeData.id : ''),
      title: new FormControl(this.filmeData ? this.filmeData.title : '', [Validators.required]),
      author: new FormControl(this.filmeData ? this.filmeData.author : '', [Validators.required]),
      description: new FormControl(this.filmeData ? this.filmeData.description : '', [Validators.required]),
      image: new FormControl('')
    })
  }

  // Validações de cada item no formulário
  get title() {
    return this.filmeForm.get('title')!;
  }

  get author() {
    return this.filmeForm.get('author')!;
  }

  get description() {
    return this.filmeForm.get('description')!;
  }



  onFileSelected(event: any) {
    const file: File = event.target.files[0]

    // inserindo a imagem
    this.filmeForm.patchValue({
      image: file
    })
  }


  submit() {
    // Valida se o furmulário está inválido (imcompleto)
    if (this.filmeForm.invalid) {
      return;
    }
    // console.log("Enviou o formulário")
    console.log(this.filmeForm.value)

    this.onSubmit.emit(this.filmeForm.value)
  }

}
