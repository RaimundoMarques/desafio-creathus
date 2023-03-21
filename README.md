# desafio-creathus
Aplicação consiste em um site de filmes

Primeiro passo:
- Cria um diretório para clonar o repositório;
- Clone o repositório com o seguinte comando:
	git clone git@github.com:RaimundoMarques/desafio-creathus.git

- Em seguida, digite a senha SSH enviada por e-mail

                                       Configurações para o diretório back-end

Instale os seguintes programas:
- Docker
- Composer
- Docker-compose

Para excutar a imagem do banco de dados em container docker, no diretório back-end, execute: 
	docker-compose up -d

Na pasta back-end, execute os seguintes comandos antes de buildar:

	npm i -g @adonisjs/cli
	
	node ace configure @adonisjs/lucid
		Escolha o banco PostgreSQL -> In the terminal
		
	npm i @adonisjs/lucid
	npm i uuid
Edite o arquivo '.env.example' para '.env' e edite os campos:
- PG_PORT=5441
- PG_USER=creathus
- PG_PASSWORD=123456abc
- PG_DB_NAME=creathus
	
Será preciso rodar uma migration:
- node ace migration:run

Para excutar a api, execute o comando:
- node ace serve --watch

Para verificar a API, digite na URL do navegador: localhost:3333/api


                                       Configurações para o diretório front-end

É preciso fazer as seguintes instalações (caso não tenha):

- NPM
- NMV
- Angular CLI
- NodeJS

Ao abrir o diretório front-end, instale ou atualize os pacotes do npm:
- npm install ou npm update

Para rodar a aplicação, execute:
- ng serve
 
Para verificar o fron-end, digite na URL: localhost:4200
