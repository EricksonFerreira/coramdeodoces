import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../shared/cliente.service';
import { Cliente } from '../shared/cliente.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  titulo: string = 'Clientes';
  tiposProdutos!: any[];
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do cliente selecionado
  isEditing:boolean = false;
  botaoTexto: string = 'Salvar';

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    // private ProdutoService: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clienteService.getAll().subscribe(
      (response: any) => {
        console.log(response);
        this.tiposProdutos = response.data; // Atribui o array de clientes à variável this.tiposProdutos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os clientes:', error);
      }
    );


    this.route.params.subscribe(params => {
      const cliente = params['id'];
      if (cliente) {
        this.clienteService.findById(cliente).subscribe(
          (cliente: any) => {
            this.formulario.patchValue(cliente); // Preenche o formulário com os valores do cliente
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o cliente em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do cliente:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de cliente
      }
    });

    this.buildFormulario();

  }

  protected creationPageTitle(): string {
    return 'Cadastro de Cliente';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    return 'Editando Cliente: ' + formNome;
  }

  protected buildFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
    });
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const cliente: Cliente = this.formulario.value;
      // console.log(this.route.snapshot.url)
      if ( this.route.snapshot.url[0].path != 'create') {
        this.botaoTexto = 'Editar';
        this.clienteService.update(cliente).subscribe(
          () => {
            this.router.navigate(['/cliente']);
            console.log('Tipo atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de clientes
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o cliente:', error);
          }
        );
      } else {
        this.clienteService.save(cliente).subscribe(
          () => {
            this.router.navigate(['/cliente']);
            // Redirecionar para a página de sucesso ou lista de clientes
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o cliente:', error);
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
