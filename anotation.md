# Webpack
- Empacotador de módulo JS
- Utiizado por diversos frameworks modernos com o React, Angular
- Trabalha com Node.js

---
# Instalação

1. Iniciar o projeto no diretório

```
npm init -y

```
2. Instalar o webpack como dependência de desenvolvimento
```
npm install --save-dev webpack webpack-cli

```
---
## Trabalhando com HTML
É necessário trabalhar com plugin para amplicar as possibilidades de uso, instalação:
```
npm install --save-dev html-webpack-plugin

```
---
## Adicionando CSS
Para trabalhar com estilos também compensa adicionar algumas extensões.
- Node-sass: compilador de sass para node
- sass-loader: carrega para o webpack compilar
- style-loader: injeta estilos na árvore de objetos (DOM)
- css-loader: interpreta diretivas do css (import, ...)
- extract: extrai o CSS do JS

```
npm install --save-dev node-sass sass-loader style-loader css-loader

``` 

- Sistema de módulos
- Gerenciamento de dependências
- Desenvolvimento x Produção

## Melhorando a compatibilidade do JS com Babel
Babel transforma o código JS para uma versão com maior compatibildade para navegadores antigos

```
npm install --save-dev @babel/core @babel/preset-env babel-loader

```

## Trabalhando com imagens
Adicionando file loader

```
npm install --salve-dev file-loader
```