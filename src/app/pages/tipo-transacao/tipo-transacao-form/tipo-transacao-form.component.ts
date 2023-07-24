import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TipoTransacaoService } from './../shared/tipo-transacao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoTransacao } from '../../tipo-transacao/shared/tipoTransacao.model';

@Component({
  selector: 'app-tipo-transacao-form',
  templateUrl: './tipo-transacao-form.component.html',
  styleUrls: ['./tipo-transacao-form.component.css']
})
export class TipoTransacaoFormComponent implements OnInit {
  titulo: string = 'Produtos';
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do tipo de transação selecionado
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
    private tipoTransacaoService: TipoTransacaoService,
    // private ProdutoService: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tipoTransacaoService.getAll().subscribe(
      (response: any) => {
        console.log(response);
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os tipos de transações:', error);
      }
    );


    this.route.params.subscribe(params => {
      const tipoTransacaoId = params['id'];
      if (tipoTransacaoId) {
        this.tipoTransacaoService.findById(tipoTransacaoId).subscribe(
          (tipoTransacao: any) => {
            this.formulario.patchValue(tipoTransacao); // Preenche o formulário com os valores do transacao
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o transacao em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do tipo de transação:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de transacao
      }
    });

    this.buildFormulario();

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Tipo de Transação';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    return 'Editando Tipo de Transação: ' + formNome;
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
      const tipoProduto: TipoTransacao = this.formulario.value;
      // console.log(this.route.snapshot.url)
      if ( this.route.snapshot.url[0].path != 'create') {
        this.botaoTexto = 'Editar';
        this.tipoTransacaoService.update(tipoProduto).subscribe(
          () => {
            this.router.navigate(['/tipotransacao']);
            console.log('Tipo atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de transacaos
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o transacao:', error);
          }
        );
      } else {
        this.tipoTransacaoService.save(tipoProduto).subscribe(
          () => {
            this.router.navigate(['/tipotransacao']);
            // Redirecionar para a página de sucesso ou lista de transacaos
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o tipo de transação:', error);
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
