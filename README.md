# spacallix-backend

## Sobre o repositório

O spacalliX é uma plataforma de informações sobre os lançamentos da SpaceX. Esse repositório contém o frontend da aplicação, que é responsável por consumir os dados do backend e exibi-los para o usuário.

## Tecnologias utilizadas

- React
- Vite
- TailwindCSS
- Axios
- React Query

## Como executar

### Pré-requisitos

- Node.js
- Yarn

### Instalação

```bash
# Clone o repositório
$ git clone

# Acesse a pasta do projeto
$ cd spacallix-frontend

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn dev
```

## Páginas

### /

Página inicial, que exibe um menu com as opções de navegação.

### /:id

Página que exibe os detalhes de um lançamento específico.

### /next

Página que exibe os detalhes do próximo lançamento.

### /latest

Página que exibe os detalhes do último lançamento.

### /upcoming

Página que exibe uma lista dos próximos lançamentos.

### /past

Página que exibe uma lista dos lançamentos passados.

## Estrutura de pastas

- `src`: código fonte da aplicação
  - `src/assets`: arquivos estáticos da aplicação
  - `src/components`: componentes da aplicação
  - `src/config`: configurações da aplicação
  - `src/hooks`: hooks da aplicação
  - `src/pages`: páginas da aplicação
  - `src/requests`: requisições da aplicação
  - `src/services`: serviços da aplicação
  - `src/styles`: estilos da aplicação
  - `src/types`: tipagens da aplicação
  - `src/utils`: funções utilitárias da aplicação
  - `src/main.tsx`: ponto de entrada da aplicação
  - `src/Router.tsx`: roteador da aplicação
