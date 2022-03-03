# microfrontend

## Como executar

Na pasta raiz do projeto executar:

1. npm run build

2. npm run deploy

O projeto1 rodará no `localhost:3500` e o projeto 2 no `localhost:3501`

## Rotas

### Projeto 1

/comp2

Exibe o web component `projeto-2-comp-sem-rota` criado no projeto 2

/comp3

Rota comum

### Projeto 2

`
/comp1

Exibe o componente `comp-sem-rota` (Esse componente é o `projeto-2-comp-sem-rota`,
só muda a nomenclatura, onde **com-sem-rota** é o nome para utilizá-lo dentro da aplicação
(seletor) e **projeto-2-comp-sem-rota** é o nome para utilizá-lo como web component)

/comp2

Exibe o web component `projeto-1-comp1` criado no projeto 1 (é um web componentc
simples apenas para demonstrar que é possível o projeto1 usar componentes do projeto 2
e vice-versa).

/comp3

Rota comum

## (Plus) Como foram instalados os pacotes:

1.  npm install @angular/elements@9.1.12

2.  npm install @ungap/custom-elements@1.0.0

3.  ng add ngx-build-plus@11.0.0 (o ng add irá ajustar o angular.json para utilizar
    o ngx-build-plus, quando executar os comandos `ng build`)

4.  ng g ngx-build-plus:wc-polyfill (vai adicionar o arquivo pollyfills.js, dentro
    desse arquivo tem que ter o `import '@ungap/custom-elements'`)
