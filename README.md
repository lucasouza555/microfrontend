# microfrontend

## Como executar

Na pasta raiz do projeto executar:

1. npm run build

2. npm run deploy

O projeto1 rodará na porta 3500 e o projeto 2 na porta 3501

## Como foram instalados os pacotes:

1.  npm install @angular/elements@9.1.12

2.  npm install @ungap/custom-elements@1.0.0

3.  ng add ngx-build-plus@11.0.0 (o ng add irá ajustar o angular.json para utilizar o ngx-build-plus, quando executar os comando `ng build`)

4.  ng g ngx-build-plus:wc-polyfill (vai adicionar o arquivo pollyfills.js, dentro desse arquivo tem que ter o `import '@ungap/custom-elements'`)
