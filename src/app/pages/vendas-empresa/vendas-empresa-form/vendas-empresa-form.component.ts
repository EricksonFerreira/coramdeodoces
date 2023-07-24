import { TipoAcaoService } from './../../tipo-acao/shared/tipo-acao.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoProdutoService } from '../../tipo-produto/shared/tipo-produto.service';
import { ProdutoService } from '../../produtos/shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produtos/shared/produto.model';
import { VendedorService } from '../../vendedor/shared/vendedor.service';
import { TipoTransacaoService } from '../../tipo-transacao/shared/tipo-transacao.service';
import { ClienteService } from '../../cliente/shared/cliente.service';
import { VendasEmpresaService } from '../shared/vendas-empresa.service';

@Component({
  selector: 'app-vendas-empresa-form',
  templateUrl: './vendas-empresa-form.component.html',
  styleUrls: ['./vendas-empresa-form.component.css'],
})
export class VendasEmpresaFormComponent implements OnInit {

  titulo: string = 'Vendas Empresa';
  clientes!: any[];
  produtos!: any[];
  compradores!: any[];
  vendedores!: any[];
  tiposTransacao!: any[];
  tiposAcao!: any[];
  formulario!: FormGroup;
  selectedProductId!: number; // Variável para armazenar o ID do tipo de produto selecionado
  isEditing:boolean = false;
  exibirErro:boolean = false;
  botaoTexto: string = 'Salvar';
  pagamento_efetuado: string = 'N';
  tipo_pagamento_selected:any = 3.
  isEntrada:boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private vendedorService: VendedorService,
    private tipoTransacaoService: TipoTransacaoService,
    private tipoAcaoService: TipoAcaoService,
    private clienteService: ClienteService,
    private vendasEmpresaService: VendasEmpresaService,
    private router:Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.produtoService.getAll().subscribe(
      (response: any) => {
        this.produtos = response.data; // Atribui o array de tipos de produtos à variável this.produtos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os produtos:', error);
      }
    );
    this.vendedorService.getAll().subscribe(
      (response: any) => {
        this.vendedores = response.data; // Atribui o array de tipos de produtos à variável this.produtos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os vendedores:', error);
      }
    );
    this.tipoTransacaoService.getAll().subscribe(
      (response: any) => {
        this.tiposTransacao = response.data; // Atribui o array de tipos de produtos à variável this.produtos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os tipos de trasações:', error);
      }
    );
    this.tipoAcaoService.getAll().subscribe(
      (response: any) => {
        this.tiposAcao = response.data; // Atribui o array de tipos de produtos à variável this.produtos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os tipos de ações:', error);
      }
    );
    this.clienteService.getAll().subscribe(
      (response: any) => {
        this.clientes = response.data; // Atribui o array de tipos de produtos à variável this.produtos
      },
      (error) => {
        console.error('Ocorreu um erro ao obter os clientes:', error);
      }
    );


    this.route.params.subscribe(params => {
      const vendaId = params['id'];
      if (vendaId) {
        this.vendasEmpresaService.findById(vendaId).subscribe(
          (orcamento: any) => {
            this.formulario.patchValue(orcamento); // Preenche o formulário com os valores do orcamento
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o orcamento em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do orçamento:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de orcamento
      }
    });

    this.buildFormulario();
    this.verificarEntradaInit();

    this.verificarTipoAcao();
    // this.formulario.get('tipo_acao_id')?.valueChanges.subscribe(() => {
    // });
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Venda na Empresa';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('nome')?.value || '';
    this.botaoTexto = 'Editar';

    return 'Editando Venda na Empresa: ' + formNome;
  }

  protected buildFormulario() {
    const dataAtual = new Date().toISOString().substring(0, 10);
    const valorInicial = this.isEntrada ? 0 : null;

    this.formulario = this.formBuilder.group({
      id: [null],
      produto_id: [null, [Validators.required]],
      quantidade: [1, [Validators.required, Validators.min(1)]],
      data: [dataAtual, [Validators.required]],
      tipo_acao_id: [2, [Validators.required]],
      cliente_id: [null, [Validators.required]],
      tipo_pagamento_id: [3, [Validators.required]],
      vendedor_id: [1, [Validators.required]],
      tipo_venda_id: [2, [Validators.required]],
      valor: [valorInicial,[Validators.required,Validators.min(1)]],
      pagamento_efetuado: ['N']
    });
  }

  verificarTipoAcao(): void {
    const tipoAcaoControl = this.formulario.get('tipo_acao_id');
    const valorControl = this.formulario.get('valor');
    const produtoIdControl = this.formulario.get('produto_id');
    const pagamentoEfetuado = this.formulario.get('pagamento_efetuado');
    const quantidadeControl = this.formulario.get('quantidade');
    const clienteIdControl = this.formulario.get('cliente_id');
    const tipoPagamentoIdControl = this.formulario.get('tipo_pagamento_id');
    const dataControl = this.formulario.get('data');
    const vendedorIdControl = this.formulario.get('vendedor_id');

    if (tipoAcaoControl) {
      const tipoAcaoValue = tipoAcaoControl.value;

      if (tipoAcaoValue == 1) {
        valorControl?.setValidators([Validators.required]);
        tipoPagamentoIdControl?.setValidators([Validators.required]);
        produtoIdControl?.clearValidators();
        pagamentoEfetuado?.clearValidators();
        quantidadeControl?.clearValidators();
      } else if (tipoAcaoValue == 2) {
        pagamentoEfetuado?.setValidators([Validators.required]);
        produtoIdControl?.setValidators([Validators.required]);
        quantidadeControl?.setValidators([Validators.required, Validators.min(1)]);
        tipoPagamentoIdControl?.clearValidators();
        valorControl?.clearValidators();
      }

      valorControl?.updateValueAndValidity();
      produtoIdControl?.updateValueAndValidity();
      quantidadeControl?.updateValueAndValidity();
      clienteIdControl?.updateValueAndValidity();
      tipoPagamentoIdControl?.updateValueAndValidity();
      dataControl?.updateValueAndValidity();
      vendedorIdControl?.updateValueAndValidity();
    }

    // Validações adicionais para entrada
    if (this.isEntrada) {
      valorControl?.setValidators([Validators.required]);
      // valorControl?.updateValueAndValidity();
    }

    this.formulario.updateValueAndValidity();
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const venda: any = this.formulario.value;
      if (this.route.snapshot.url[1]!== undefined && this.route.snapshot.url[1].path === 'edit') {
        this.vendasEmpresaService.update(venda).subscribe(
          () => {
            this.router.navigate(['/venda/empresa']);
            console.log('Orçamento atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de orcamento
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o orçamento:', error);
            this.exibirErro = true;
          }
        );
      } else {
        this.vendasEmpresaService.save(venda).subscribe(
          () => {
            this.formulario.reset();
            // this.router.navigate(['/orcamento']);
            // Redirecionar para a página de sucesso ou lista de orcamento
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o orçamento:', error);
            this.exibirErro = true;
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
    }
    );
  }
  validarQuantidade(control: FormControl) {
    const quantidade = control.value;
    if (quantidade <= 0) {
      return { quantidadeInvalida: true };
    }
    return null;
  }
  verificarEntradaInit(): void {
    const tipoAcaoControl = this.formulario.get('tipo_acao_id');

    if (tipoAcaoControl && tipoAcaoControl?.value === 1) {
      this.isEntrada = true;
    } else {
      this.isEntrada = false;
    }
  }
  verificarEntrada(selectElement: HTMLSelectElement): void {
    const valorSelecionado: string = selectElement.value;

    if (valorSelecionado == "1") {
      this.isEntrada = true; // Modifica a propriedade isEntrada
    } else {
      this.isEntrada = false; // Modifica a propriedade isEntrada
    }
  }
}
