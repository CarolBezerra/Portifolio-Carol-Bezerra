# Portifolio-Carol-Bezerra

Este projeto é uma aplicação React que inclui um componente de contato, permitindo que os usuários enviem mensagens e visualizem informações de contato.

## Estrutura do Projeto

```
Portifolio-Carol-Bezerra
├── app
│   └── components
│       └── contact.tsx
├── public
├── src
├── Dockerfile
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```bash
npm install
```

## Execução

Para executar o projeto em um ambiente Docker, utilize o Docker Compose. Execute o seguinte comando na raiz do projeto:

```bash
docker-compose up
```

Isso irá construir a imagem e iniciar o contêiner, expondo a aplicação na porta 3000.

## Estrutura do Componente de Contato

O componente `Contact` gerencia um formulário de contato e exibe informações de contato. Ele utiliza hooks do React para gerenciar o estado do formulário e renderiza uma interface de usuário com informações de contato.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.