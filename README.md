
# Monke Challenger

Bem-vindo ao nosso projeto **Gerenciador de Empresas**! Este é um sistema simples que permite que os usuários se cadastrem, façam login e gerenciem empresas com facilidade. O projeto backend foi construído com **Angular**, um framework poderoso que nos permite criar projetos performáticos e bem estruturados.

### Link para o respositório backend
https://github.com/Rharan-Ru/monke-challenger-backend

## Funcionalidades

- Tela de login
- Tela de companies
- Modal de criação de companie
- Modal de edição
- Modal de confirmação
- Modal de detalhes da companie

## Stack utilizada

**Front-end:** Angular, Tailwind
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar/modificar as seguintes variáveis de ambiente no seu arquivo ./src/environments/environment.ts:

```bash
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
};
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Rharan-Ru/monke-challenger-frontend.git
```

Entre no diretório do projeto

```bash
  cd monke-challenger-frontend
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor com o comando

```bash
  npm start
```
## Screenshots

![App Screenshot](https://github.com/Rharan-Ru/monke-challenger-backend/blob/main/Screenshot%202024-10-07%20at%2002-06-03%20Frontend.png)

![App Screenshot](https://github.com/Rharan-Ru/monke-challenger-backend/blob/main/Screenshot%202024-10-07%20at%2002-07-21%20Frontend.png)

![App Screenshot](https://github.com/Rharan-Ru/monke-challenger-backend/blob/main/Screenshot%202024-10-07%20at%2002-07-36%20Swagger%20UI.png)

## 🎨 Decisões Técnicas no Frontend

O frontend do projeto foi desenvolvido utilizando **Angular**, que foi uma escolha devido a um requisito do projeto. Embora eu ainda esteja aprendendo essa tecnologia, tive uma experiência muito positiva ao utilizá-la. Abaixo, explico algumas das decisões técnicas tomadas para esta parte da aplicação:

### 1️⃣ Angular como Requisito
O **Angular** foi escolhido por ser um requisito deste projeto. Mesmo sendo uma tecnologia nova para mim, consegui aprender o básico rapidamente devido à sua estrutura organizada, que se assemelha bastante ao **NestJS** no backend. Essa similaridade facilitou o meu processo de desenvolvimento e aprendizado, e pretendo continuar estudando Angular para dominar melhor a ferramenta.

### 2️⃣ Interfaces Simples e Eficazes
Minha principal preocupação durante o desenvolvimento do frontend foi criar interfaces que fossem **simples** e ao mesmo tempo **eficazes**. O objetivo é que o usuário consiga navegar e entender o funcionamento da aplicação de forma intuitiva, sem complicações. Isso ajuda a manter a usabilidade e acessibilidade em níveis elevados, proporcionando uma experiência fluida.

### 3️⃣ Estrutura de Pastas Padrão do Angular CLI
Para manter o projeto organizado, utilizei a estrutura de pastas gerada pelo **Angular CLI**. A ferramenta de linha de comando do Angular permite a criação rápida e eficiente de componentes, serviços e módulos, seguindo boas práticas e convenções. Isso ajudou a manter o código estruturado e fácil de manter.

### 4️⃣ Tailwind CSS para Estilização
A escolha do **Tailwind CSS** para a estilização foi feita com base em sua simplicidade e na facilidade de criar **interfaces responsivas**. Utilizar o Tailwind permitiu que eu criasse layouts de forma rápida e eficiente, sem a necessidade de escrever estilos complexos. Isso resultou em um código de CSS mais enxuto e em uma boa performance, especialmente em dispositivos móveis.
