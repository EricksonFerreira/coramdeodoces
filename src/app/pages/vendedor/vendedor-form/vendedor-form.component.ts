import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../vendedor/shared/vendedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoProduto } from '../../tipo-produto/shared/tipoProduto.model';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {
  titulo: string = 'Vendedores';
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do vendedor selecionado
  isEditing:boolean = false;
  botaoTexto: string = 'Salvar';

  constructor(
    private formBuilder: FormBuilder,
    private vendedorService: VendedorService,
    // private ProdutoService: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const tipoProdutoId = params['id'];
      if (tipoProdutoId) {
        this.vendedorService.findById(tipoProdutoId).subscribe(
          (produto: any) => {
            this.formulario.patchValue(produto); // Preenche o formulário com os valores do produto
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o produto em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do vendedor:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de produto
      }
    });

    this.buildFormulario();

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Vendedor';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    this.botaoTexto = 'Editar';
    return 'Editando Vendedor: ' + formNome;
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
        this.vendedorService.update(tipoProduto).subscribe(
          () => {
            this.router.navigate(['/vendedores']);
            console.log('Tipo atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de produtos
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o vendedor:', error);
          }
        );
      } else {
        this.vendedorService.save(tipoProduto).subscribe(
          () => {
            this.router.navigate(['/vendedores']);
            // Redirecionar para a página de sucesso ou lista de produtos
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o vendedor:', error);
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
