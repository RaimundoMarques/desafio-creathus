# desafio-creathus
Aplicação consiste em um site de filmes

Primeiro passo:
- Crie um diretório para clonar o repositório;
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
	npm i @adonisjs/lucid
	node ace configure @adonisjs/lucid
		Escolha o banco PostgreSQL -> In the terminal
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
******************************************************************************

Algumas especificaç do Projeto:
					BACK-END
					
- Toda a criação do banco de dados, se dá dentro de um container simples do docker e que se encontra no documento:
	docker-compose.yml

- As configurações de conexão com o container do banco de dados, estão no arquivo '.env' na raiz do projeto

- A criação da estrutura da tabela "filmes" , é feita através da migration já configurada com seus campos, tipos e que se encontra no caminho: 
	database/migrations

- Todas as imagens inseridas no sistema, irão para a pasta que se encontra no caminho abaixo:
	tmp/uploads
	- Para simular uma base de dados válida, fiz o upload de algumas imagens dentro desta pasta

- Um arquivo chamado script-sql.txt, contém os inserts para simular uma lista de filmes válidos

					FRONT-END
					
- Cada componente do projeto no Angular, possui uma estrutura contendo os arquivos .CSS, .HTML e .TS, onde irão conter os códigos de Estilo, Página e Lógica respectivamente de cada componente.

- O "index.html" root se encontra na pasta raiz do projeto junto com um .CSS global


	

	
	
	
