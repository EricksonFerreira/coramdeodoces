import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoAcaoService } from '../../tipo-acao/shared/tipo-acao.service';
import { TipoAcao } from '../../tipo-acao/shared/tipoAcao.model';

@Component({
  selector: 'app-tipo-acao-form',
  templateUrl: './tipo-acao-form.component.html',
  styleUrls: ['./tipo-acao-form.component.css']
})
export class TipoAcaoFormComponent implements OnInit {
  titulo: string = 'Tipo Ação';
  tiposProdutos!: any[];
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do tipoAcao selecionado
  isEditing:boolean = false;
  botaoTexto: string = 'Salvar';
  cores:any[] = [
    {'class':'badge-warning','nome':'Amarelo'},
    {'class':'badge-primary','nome':'Azul'},
    {'class':'badge-secondary','nome':'Cinza'},
    {'class':'badge-success','nome':'Verde'},
    {'class':'badge-red','nome':'Vermelho'},
    {'class':'badge-dark','nome':'Preto'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private tipoAcaoService: TipoAcaoService,
    // private ProdutoService: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tipoAcaoService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.tiposProdutos = response.data; // Atribui o array de tipoAcaos à variável this.tiposProdutos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os tipoAcaos:', error);
      }
    );


    this.route.params.subscribe(params => {
      const tipoAcao = params['id'];
      if (tipoAcao) {
        this.tipoAcaoService.findById(tipoAcao).subscribe(
          (tipoAcao: any) => {
            this.formulario.patchValue(tipoAcao); // Preenche o formulário com os valores do tipoAcao
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o tipoAcao em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do tipoAcao:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de tipoAcao
      }
    });

    this.buildFormulario();

  }

  protected creationPageTitle(): string {
    return 'Cadastro de TipoAcao';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    return 'Editando TipoAcao: ' + formNome;
  }

  protected buildFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      cor: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const tipoAcao: TipoAcao = this.formulario.value;
      // console.log(this.route.snapshot.url)
      if ( this.route.snapshot.url[0].path != 'create') {
        this.botaoTexto = 'Editar';
        this.tipoAcaoService.update(tipoAcao).subscribe(
          () => {
            this.router.navigate(['/tipoacao']);
            console.log('Tipo atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de tipoAcaos
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o tipoAcao:', error);
          }
        );
      } else {
        this.tipoAcaoService.save(tipoAcao).subscribe(
          () => {
            this.router.navigate(['/tipoacao']);
            // Redirecionar para a página de sucesso ou lista de tipoAcaos
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o tipoAcao:', error);
          }
        );
      }
    } else {
      // Exibe mensagens de erro nos campos inválidos
      this.validateForm(this.formulario);
    }
  }

  private validateForm(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.validateForm(control);
      } else {
        control?.markAsDirty();
        control?.markAsTouched();
      }
    });
  }
}
