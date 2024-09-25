# To-Do List - API

## Descrição

Projeto desenvolvido com TypeScript, Express/Node.js e MongoDB para gerenciar tarefas. O sistema permite criar, editar, deletar e listar tarefas com persistência de dados no banco de dados MongoDB.

### Funcionalidades

- Adicionar uma nova tarefa
- Editar uma tarefa existente
- Deletar uma tarefa
- Listar todas as tarefas
- Visualizar detalhes de uma tarefa
- Obter a última tarefa criada ou atualizada

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose (para modelagem de dados)

## Como rodar o projeto

### Requisitos:

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)
- MongoDB (local ou em nuvem)

### Passos:

1. Clone este repositório:
  ```
   git clone https://github.com/joaocarvalhop/todo-api.git
   ```
	  
2. Acesse o diretório do projeto:
  ```    
cd ./todo-api
  ```
	
3. Instale as dependências:
  ```    
  npm install
  ```
	
4. Configure o MongoDB:
    
    - Crie um arquivo `.env` na raiz do projeto com a seguinte variável:
		```
        DB_URI=mongodb://localhost:27017/todo-api
        ```
        Ou, caso esteja usando MongoDB em nuvem, substitua pelo URI de conexão do MongoDB Atlas.
      
5. Compile o projeto TypeScript:
```
npm run build
```    
6. Inicie o servidor:
```
npm run start
  ```
7. Acesse a API no endereço:
```    
http://localhost:3000/api
```    

## Rotas da API

- `GET /api/tasks` - Lista todas as tarefas
- `GET /api/tasks/:id` - Visualiza uma tarefa específica
- `POST /api/tasks` - Cria uma nova tarefa
- `PUT /api/tasks/:id` - Atualiza uma tarefa existente
- `DELETE /api/tasks/:id` - Deleta uma tarefa
- `GET /api/tasks/last-created` - Obter a última tarefa criada
- `GET /api/tasks/last-updated` - Obter a última tarefa atualizada
