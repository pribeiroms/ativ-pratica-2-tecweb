# Wishlist de Presentes

Aplicação web desenvolvida em React para gerenciamento de uma lista de presentes desejados. O sistema permite cadastrar, organizar e visualizar itens de interesse, contendo informações como nome do presente, categoria, preço estimado, prioridade e observações.

## Objetivo

Desenvolver uma aplicação web utilizando React que permita ao usuário gerenciar uma lista de presentes desejados, aplicando conceitos de roteamento, formulários controlados, validação de dados, compartilhamento de estado e integração com API REST simulada.

## Integrantes

* Paula Ribeiro
* Aluisio
* Miguel

## Funcionalidades

* Navegação entre as páginas Início, Cadastro e Listagem;
* Cadastro de presentes por meio de formulário controlado;
* Validação dos campos obrigatórios;
* Compartilhamento de estado entre páginas;
* Exibição dinâmica dos itens cadastrados;
* Integração com API REST simulada;
* Interface responsiva para diferentes dispositivos.

## Tecnologias Utilizadas

* React
* React Router DOM
* JavaScript
* CSS
* Fetch API

## Estrutura de Páginas

### Início

Página responsável por apresentar a aplicação, seu objetivo e suas principais funcionalidades.

### Cadastro

Página destinada ao cadastro de novos presentes contendo os campos:

* Nome do item;
* Categoria;
* Preço estimado;
* Prioridade;
* Observações.

### Listagem

Página responsável por exibir todos os presentes cadastrados dinamicamente.

## Organização do Projeto

O desenvolvimento foi organizado utilizando:

* GitHub Projects para gerenciamento das tarefas;
* Issues para controle das funcionalidades;
* Branches individuais para cada tarefa;
* Pull Requests para integração das alterações;
* Commits padronizados seguindo convenções semânticas.

## Como Executar o Projeto

### Pré-requisitos

* Node.js instalado;
* npm instalado.

### Instalação

Instale as dependências do projeto:

```bash
npm install
```

### Execução

Execute a aplicação localmente:

```bash
npm run dev
```

Após iniciar a aplicação, acesse a URL exibida no terminal e navegue entre as páginas Início, Cadastro e Listagem.

## Estrutura de Branches

### Branch Principal

* `main`

### Branches de Integração

* `feature/paula-dev`
* `feature/aluisio-dev`
* `feature/miguel-dev`

## API REST Simulada

A aplicação utiliza uma API REST simulada para demonstrar a integração entre frontend e serviços externos. Os dados são carregados por meio de requisições utilizando `fetch`.
