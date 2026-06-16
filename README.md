# 🎁 Wishlist de Presentes

Aplicação web desenvolvida em React para gerenciamento de uma lista de presentes desejados. O sistema permite cadastrar, organizar e visualizar itens de interesse, contendo informações como nome do presente, categoria, preço estimado, prioridade e observações.

## 📌 Objetivo

Desenvolver uma aplicação web utilizando React que permita ao usuário gerenciar uma lista de presentes desejados, aplicando conceitos de roteamento, formulários controlados, validação de dados, compartilhamento de estado e integração com API REST simulada.

## 👥 Integrantes

* Paula Ribeiro Moreira de Souza - 2412130037
* Aluisio Veloso Silva Carvalho - 2412130165
* Miguel Ferreira Pedroso - 2412130072

## ✨ Funcionalidades

* Navegação entre as páginas **Início**, **Cadastro** e **Listagem**
* Cadastro de presentes por meio de formulário controlado
* Validação dos campos obrigatórios
* Compartilhamento de estado entre páginas com Context API
* Exibição dinâmica dos itens cadastrados
* Integração com API REST simulada utilizando Fetch API
* Tratamento de carregamento e erro na listagem
* Interface responsiva para diferentes dispositivos

## 🛠️ Tecnologias Utilizadas

* React
* React Router DOM
* JavaScript
* CSS
* Fetch API
* Vite

## 📄 Estrutura de Páginas

### 🏠 Início

Página responsável por apresentar a aplicação, seu objetivo e suas principais funcionalidades.

### 📝 Cadastro

Página destinada ao cadastro de novos presentes contendo os campos:

* Nome do item
* Categoria
* Preço estimado
* Prioridade
* Observações

### 📋 Listagem

Página responsável por exibir dinamicamente os presentes cadastrados pelo usuário e as sugestões carregadas da API REST simulada.

## 🔗 API REST Simulada

A aplicação utiliza uma API REST simulada para demonstrar a integração entre frontend e serviços externos.

Os dados são carregados por meio da Fetch API a partir do endpoint local:

```text
/api/sugestoes.json
```

Na página de Listagem, a aplicação exibe os presentes cadastrados pelo usuário e também sugestões carregadas da API simulada, com tratamento de carregamento e erro.

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de iniciar, é necessário ter instalado:

* Node.js
* npm

### 1. Clonar o repositório

```bash
git clone https://github.com/pribeiroms/ativ-pratica-2-tecweb.git
```

### 2. Acessar a pasta do projeto

```bash
cd ativ-pratica-2-tecweb
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Executar a aplicação localmente

```bash
npm run dev
```

### 5. Acessar no navegador

Após iniciar a aplicação, acesse a URL exibida no terminal. Normalmente será:

```text
http://localhost:5173
```

## ✅ Como Testar as Funcionalidades

1. Acesse a página inicial.
2. Navegue pelo menu para as páginas **Cadastro** e **Listagem**.
3. Na página Cadastro, tente enviar o formulário vazio para verificar as validações.
4. Preencha os campos obrigatórios:

   * Nome do item
   * Categoria
   * Preço estimado
   * Prioridade
5. Clique em **Cadastrar Presente**.
6. Acesse a página **Listagem**.
7. Verifique se o presente cadastrado aparece na listagem.
8. Confira a seção de sugestões carregadas pela API REST simulada.
9. Teste a responsividade reduzindo o tamanho da tela ou utilizando as ferramentas de desenvolvedor do navegador.

## 📜 Scripts Disponíveis

### Executar em modo desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

### Executar verificação de lint

```bash
npm run lint
```

## 📂 Organização do Projeto

O desenvolvimento foi organizado utilizando:

* GitHub Projects para gerenciamento das tarefas
* Issues para controle das funcionalidades
* Branches individuais para cada tarefa
* Pull Requests para integração das alterações
* Commits padronizados seguindo convenções semânticas

## 🌿 Estrutura de Branches

### Branch Principal

```text
main
```

### Branch de Integração

```text
feature/paula-dev
feature/aluisio-dev
feature/miguel-dev
```

### Branches de Desenvolvimento

#### Paula

```text
feature/paula-inicializar
feature/paula-rotas-layout
feature/paula-pagina-inicio
feature/paula-estilos-responsivos
```

#### Aluisio

```text
feature/aluisio-formulario
feature/aluisio-validacao
feature/aluisio-submissao-estado
```

#### Miguel

```text
feature/miguel-listagem
feature/miguel-estado-compartilhado
feature/miguel-api-rest
```

## 📦 Entrega

A versão final do projeto está disponível na branch **main**, contendo todas as funcionalidades obrigatórias solicitadas na atividade.
