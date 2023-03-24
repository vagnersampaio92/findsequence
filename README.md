<h1 align="center">Find Sequence</h1>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Docker](https://www.docker.com/).
Além disso, um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/vagnersampaio92/findsequence.git

# Acesse a pasta do projeto no terminal/cmd
$ cd findsequence



# Rodar o projeto com o docker, ele ficará disponível na porta http://localhost:3000/
$ docker-compose up -d

# Para rodar o projeto em DEV
# Passo 1: subir um container com Mongo
$ docker run -d -p 27017:27017 --name matrix-mongo mongo

# Passo 2: Criar um arquivo .env se baseando no .env.exemple

# Passo 3: instalar os pacotes
$ npm install

# Passo 4: Execute os testes
$ npm run dev

```

### Documentação
Documentação das rotas podem ser usandas copiandp diretamente os curl de exemplo abaixo ou clicando no botão do postan que será direcionado.

```bash
# verifa e armazena as sequências
$ curl --location --request POST 'http://localhost:3000/sequence' \
$ --header 'Content-Type: application/json' \
$ --data-raw '{"letters": ["DUHBHB", "DUBUHD", "UBUUHU", "BHBDHH", "DDDDUB", "UDBDUH"]}'

#Mostra a estatísticas
curl --location --request GET 'http://localhost:3000/stats'

```

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/8409122/2s93RMWG4g)


  
### Teste automatizados

```bash
# Execute os testes
# Passo 1: subir um container com Mongo
$ docker run -d -p 27017:27017 --name matrix-mongo mongo

# Passo 2: Execute os testes
$ npm test

# Passo 3: Para ver o coverage dos teste
Acessar e abrir no eu navegador o arquivo está em __testes__/coverage/lcov-report/index.html
```
Print do coverage 
![Screenshot](https://imagensvagner.s3.sa-east-1.amazonaws.com/Captura+de+Tela+2023-03-23+a%CC%80s+23.25.13.png)


