
# Tarefas
API para Gerenciamento de Tarefas
Sobre o Projeto
Esta API é um sistema de gerenciamento de tarefas, permitindo a organização e controle eficiente das atividades a serem realizadas.

Tecnologias Empregadas

Este projeto utiliza tecnologias modernas para garantir eficiência e segurança

Node.js: Plataforma JavaScript para execução de código no lado do servidor.

Express.js: Framework web para Node.js, facilitando a criação de APIs robustas.

MongoDB: Banco de dados NoSQL orientado a documentos, proporcionando alta performance e escalabilidade.

Mongoose: Biblioteca MongoDB para modelagem de dados, assegurando um controle preciso sobre as informações.

bcrypt: Biblioteca para hash seguro de senhas, protegendo dados sensíveis.

jsonwebtoken: Implementação de tokens JWT para autenticação segura de usuários.

Nodemon: Utilitário para monitorar mudanças no código, reiniciando automaticamente o servidor.


 Instalação e Execução do Projeto:


1- Clone este repositório para sua máquina local:



	git clone https://github.com/seu-usuario/APIdeTarefas.git
2- Instale as dependências do projeto:

	npm install
3- Crie um arquivo .env e adicione as seguintes Variáveis de Ambiente:

	MONGODB_URI=insira_a_string_de_conexao_mongodb_aqui
	JWT_SECRET=insira_uma_chave_secreta_para_jwt_aqui
- Você precisará de uma string de conexão MongoDB para a comunicação com o banco de dados.
  
4- Execute o comando abaixo para gerar uma string na variável JWT_SECRET no arquivo .env:

	node generateSecret.js
 
5- Inicie o servidor local:

	npm run dev
 
 Rotas da API
 
A API oferece diversas rotas para interação com os recursos do sistema. 

As principais rotas incluem:

Tarefas: Manipulação de informações sobre as tarefas.

Criação: Adiciona uma nova tarefa ao sistema.

Listagem: Apresenta todas as tarefas registradas no sistema.

Atualização: Permite a modificação de uma tarefa existente.

Exclusão: Remove uma tarefa do sistema.
