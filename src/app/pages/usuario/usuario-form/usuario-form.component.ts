import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  formulario!: FormGroup;
  titulo: string = "Cadastro de Usuário";
  botaoTexto: string = 'Salvar';

  constructor(
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public usuarioService: UsuarioService,
    public router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const usuarioId = params['id'];
      if (usuarioId) {
        this.usuarioService.findById(usuarioId).subscribe(
          (usuario: any) => {
            this.formulario.patchValue(usuario); // Preenche o formulário com os valores do usuario
            this.titulo = this.editionPageTitle(); // Atualiza o título da página de acordo com o usuario em edição
          },
          (error) => {
            console.error('Ocorreu um erro ao obter os detalhes do usuario:', error);
          }
        );
      } else {
        this.titulo = this.creationPageTitle(); // Define o título da página para criação de usuario
      }
    });

    this.buildFormulario();
  }
  protected creationPageTitle(): string {
    return 'Cadastro de Usuário';
  }

  protected editionPageTitle(): string {
    const formNome = this.formulario?.get('name')?.value || '';
    this.botaoTexto = 'Editar';
    return 'Editando Usuário: ' + formNome;
  }

  protected buildFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.formulario.valid) {
      const usuario: Usuario = this.formulario.value;
      // console.log(this.route.snapshot.url)
      if ( this.route.snapshot.url[0].path != 'create') {
        this.botaoTexto = 'Editar';
        this.usuarioService.update(usuario).subscribe(
          () => {
            this.router.navigate(['/usuarios']);
            console.log('Tipo atualizado com sucesso!');
            // Redirecionar para a página de sucesso ou lista de usuarios
          },
          (error) => {
            console.error('Ocorreu um erro ao atualizar o usuario:', error);
          }
        );
      } else {
        this.usuarioService.save(usuario).subscribe(
          () => {
            this.router.navigate(['/usuarios']);
            // Redirecionar para a página de sucesso ou lista de usuarios
          },
          (error) => {
            console.error('Ocorreu um erro ao criar o usuario:', error);
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
