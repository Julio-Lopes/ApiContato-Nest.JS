# Exercício Zapi - API para salvar contato

## 📄 API Documentation - Contato

### 📝 **Descrição**

Esta é uma API RESTful desenvolvida para gerenciamento de **contatos**.  
A API foi construída seguindo as melhores práticas de desenvolvimento e está documentada utilizando o padrão **OpenAPI**.

---

## 🚀 Tecnologias Utilizadas

- **TypeScript** com **NestJS**
- Banco de Dados Relacional: **MySQL**
- Banco de Dados Não Relacional para salvar logs: **MongoDB**

---

## 📚 Endpoints - Contato `/contato`

| Método   | Endpoint    | Descrição                         |
|----------|-------------|-----------------------------------|
| `POST`   | `/contato`  | Salva o contato no banco de dados |

---

## ⚙️ Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   gh repo clone Julio-Lopes/ApiContato-Nest.JS
   cd ApiContato-Nest.JS
2. **Configure o banco de dados**:
   ```bash
   Crie o banco de dados MySQL.
   No arquivo app.module.ts, configure as credenciais:
   TypeOrmModule.forRoot({
     host: 'localhost',
     username: 'seu_username',
     password: 'sua_senha',
     database: 'nome_da_sua_database',
     ...
    }),
    MongooseModule.forRoot('sua_conexao_MongoDB'),
3. **Execute a aplicação**:
   ```bash
   npm run start:dev
5. **Acesse a documentação Swagger**:
   ```bash
   URL: http://localhost:3000/contato

