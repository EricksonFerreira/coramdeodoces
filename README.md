# TesteDoces Website

<img src="https://testedoces.ericksondev.tech/assets/logo.jpeg" alt="TesteDoces Website" width="250">

Este é o repositório do projeto TesteDoces, um site desenvolvido com Angular que permite testar diferentes tipos de doces e exibir informações sobre eles. O site se conecta a uma API hospedada em https://ericksondev.tech/testedocesapi/api/ para obter os dados necessários.


Este é o repositório do projeto TesteDoces, um site desenvolvido com Angular que possui funcionalidades administrativas voltadas para o gerenciamento de doces. O sistema se conecta a uma API hospedada em https://ericksondev.tech/testedocesapi/api/ para realizar as operações de CRUD (Create, Read, Update, Delete) em diversas entidades relacionadas ao negócio. A autenticação no sistema é feita utilizando JWT (JSON Web Tokens) para garantir a segurança das informações.

## Funcionalidades Administrativas

### Login e Autenticação

- Sistema de Login: Permite que os usuários autenticados acessem o painel administrativo do TesteDoces.
- Autenticação JWT: O sistema utiliza JSON Web Tokens para autenticar os usuários e conceder acesso seguro às funcionalidades administrativas.

### Produtos

- Cadastro de Produtos: Permite adicionar novos produtos ao sistema, incluindo informações como nome, descrição, preço e imagens.
- Edição de Produtos: Possibilita atualizar informações de produtos existentes, como preço e descrição.
- Remoção de Produtos: Permite excluir produtos do sistema caso não estejam mais disponíveis.

### Tipos de Produtos

- Gerenciamento de Categorias: Permite criar e gerenciar categorias de produtos para organizar o catálogo.
- Edição de Categorias: Possibilita alterar o nome ou outras informações das categorias existentes.
- Exclusão de Categorias: Permite remover categorias que não são mais necessárias.

### Tipos de Transações

- Registro de Transações: Permite definir e registrar tipos de transações relacionadas a vendas, compras ou trocas de produtos.
- Edição de Transações: Possibilita atualizar as informações dos tipos de transações conforme necessário.
- Remoção de Transações: Permite excluir tipos de transações que não são mais utilizados.

### Tipos de Ações

- Acompanhamento de Estoque: Permite registrar e gerenciar as ações de entrada e saída de produtos no estoque.

### Clientes

- Cadastro de Clientes: Permite adicionar novos clientes ao sistema, incluindo informações de contato e endereço.
- Edição de Clientes: Possibilita atualizar informações dos clientes cadastrados.
- Remoção de Clientes: Permite excluir clientes do sistema.

### Vendedores

- Gerenciamento de Vendedores: Permite manter um registro dos vendedores que interagem com o sistema.
- Edição de Vendedores: Possibilita atualizar informações dos vendedores cadastrados.
- Remoção de Vendedores: Permite excluir vendedores do sistema.

### Vendas

- Registro de Vendas: Permite registrar vendas para empresas, faculdade, terceirizado e encomendas.
- Acompanhamento de Vendas: Exibe uma visão geral das quantidades de vendas para as diferentes categorias.

## Demonstração

Visite o [TesteDoces Website](https://testedoces.ericksondev.tech/) para ver o site em ação.

## Capturas de tela

![Captura de tela 1](https://testedoces.ericksondev.tech/assets/img1.png)
![Captura de tela 2](https://testedoces.ericksondev.tech/assets/img2.png)
![Captura de tela 3](https://testedoces.ericksondev.tech/assets/img3.png)

## Tecnologias utilizadas

- Angular
- HTML5
- CSS3
- TypeScript
- JSON Web Tokens (JWT) para autenticação

## Como executar o projeto localmente

1. Certifique-se de ter o Node.js instalado em seu computador.
2. Clone este repositório em sua máquina local: `git clone https://github.com/EricksonFerreira/coramdeodoces.git`
3. Acesse o diretório do projeto: `cd coramdeodoces`
4. Instale as dependências necessárias: `npm install`
5. Inicie o servidor de desenvolvimento: `ng serve`
6. Abra seu navegador e acesse `http://localhost:4200/`

## Contribuição

Se você deseja contribuir com este projeto, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request* no [repositório do GitHub](https://github.com/EricksonFerreira/coramdeodoces). Sua ajuda é muito bem-vinda!

## Autor

Este projeto foi desenvolvido por [Erickson Ferreira](portfolio.ericksondev.tech). Você pode encontrar mais informações sobre o autor em seu site.

## Licença

Ainda irei definir!


Agradecemos o seu interesse em nosso projeto TesteDoces! Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato ou abrir uma issue no GitHub. Esperamos que você se divirta testando e descobrindo novos doces deliciosos!
