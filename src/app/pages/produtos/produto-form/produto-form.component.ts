import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../shared/produto.model';
import { TipoProdutoService } from '../../tipo-produto/shared/tipo-produto.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
})
export class ProdutoFormComponent implements OnInit {
  titulo: string = 'Produtos';
  tiposProdutos!: any[];
  historicoPrecos!: any[];
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do tipo de produto selecionado
  isEditing:boolean = false;
  botaoTexto: string = 'Salvar';

  constructor(
    private formBuilder: FormBuilder,
    private TipoProdutoService: TipoProdutoService,
    private ProdutoService: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.TipoProdutoService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.tiposProdutos = response.data; // Atribui o array de tipos de produtos à variável this.tiposProdutos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os tipos de produtos:', error);
      }
    );

    this.route.params.subscribe(params => {
      const produtoId = params['id'];
      if (produtoId) {
        this.ProdutoService.findById(produtoId).subscribe(
          (produto: any) => {
            this.formulario.patchValue(produto); // Preenche o formulário com os valores do produto
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o produto em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do produto:', error);
          }
        );

        this.ProdutoService.getHistoricoPrecoOfProduto(produtoId).subscribe(
          (response: any) => {
            this.historicoPrecos = response; // Atribui o array de tipos de produtos à variável this.tiposProdutos
            console.log(this.historicoPrecos);
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os tipos de produtos:', error);
          }
        );


      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de produto
      }
    });

    this.buildFormulario();

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Produto';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    return 'Editando Produto: ' + formNome;
  }

  protected buildFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      tipo_id: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const produto: Produto = this.formulario.value;
      if (this.route.snapshot.url[1].path === 'edit') {
        this.botaoTexto = 'Editar';
        this.ProdutoService.update(produto).subscribe(
          () => {
            this.router.navigate(['/produtos']);
            console.log('Produto atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de produtos
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o produto:', error);
          }
        );
      } else {
        this.ProdutoService.save(produto).subscribe(
          () => {
            this.router.navigate(['/produtos']);
            // Redirecionar para a página de sucesso ou lista de produtos
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o produto:', error);
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
