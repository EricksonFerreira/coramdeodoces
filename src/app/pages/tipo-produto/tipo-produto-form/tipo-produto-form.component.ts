import { Component, OnInit } from '@angular/core';
import { TipoProdutoService } from '../shared/tipo-produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../../produtos/shared/produto.service';
import { Produto } from '../../produtos/shared/produto.model';
import { TipoProduto } from '../shared/tipoProduto.model';

@Component({
  selector: 'app-tipo-produto-form',
  templateUrl: './tipo-produto-form.component.html',
  styleUrls: ['./tipo-produto-form.component.css']
})
export class TipoProdutoFormComponent implements OnInit {
  titulo: string = 'Produtos';
  tiposProdutos!: any[];
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do tipo de produto selecionado
  isEditing:boolean = false;
  botaoTexto: string = 'Salvar';

  constructor(
    private formBuilder: FormBuilder,
    private tipoProdutoService: TipoProdutoService,
    // private ProdutoService: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tipoProdutoService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.tiposProdutos = response.data; // Atribui o array de tipos de produtos à variável this.tiposProdutos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os tipos de produtos:', error);
      }
    );


    this.route.params.subscribe(params => {
      const tipoProdutoId = params['id'];
      if (tipoProdutoId) {
        this.tipoProdutoService.findById(tipoProdutoId).subscribe(
          (produto: any) => {
            this.formulario.patchValue(produto); // Preenche o formulário com os valores do produto
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o produto em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do tipo de produto:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de produto
      }
    });

    this.buildFormulario();

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Tipo de Produto';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    return 'Editando Tipo de Produto: ' + formNome;
  }

  protected buildFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
    });
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const tipoProduto: TipoProduto = this.formulario.value;
      // console.log(this.route.snapshot.url)
      if ( this.route.snapshot.url[0].path != 'create') {
        this.botaoTexto = 'Editar';
        this.tipoProdutoService.update(tipoProduto).subscribe(
          () => {
            this.router.navigate(['/tipoproduto']);
            console.log('Tipo atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de produtos
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o produto:', error);
          }
        );
      } else {
        this.tipoProdutoService.save(tipoProduto).subscribe(
          () => {
            this.router.navigate(['/tipoproduto']);
            // Redirecionar para a página de sucesso ou lista de produtos
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o tipo de produto:', error);
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
